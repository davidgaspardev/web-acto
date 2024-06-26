import { loadBasicAuthHeaderValue } from "@/helpers/auth";
import {
  EVO_API_BASE_URL,
  EVO_API_PASSWORD,
  EVO_API_USERNAME,
  USE_MOCK,
} from "@/helpers/env";
import { Membership, BranchePlan, BranchePlanPromotional } from "@/helpers/types";

export default class EvoApiClient {
  private static instance: EvoApiClient;
  private constructor() {}

  public static getInstance(): EvoApiClient {
    if (!this.instance) this.instance = new EvoApiClient();

    return this.instance;
  }

  public getPlansByBranchId = async (
    branchId: number
  ): Promise<Array<BranchePlan>> => {
    if (USE_MOCK) return [];

    const url = `${EVO_API_BASE_URL}/v1/membership?idBranch=${branchId}&active=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: loadBasicAuthHeaderValue(EVO_API_USERNAME, EVO_API_PASSWORD),
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        pragma: "no-cache",
        Accept: "application/json",
      },
    });

    if (response.status === 200) {
      const membershipList: Array<Membership> = await response.json();
      console.log("Membership list:", membershipList);
      return membershipList
        .filter(
          (membership) =>
            membership.nameMembership.startsWith("SITE:") && membership.urlSale
        )
        .map<BranchePlan>(
          ({
            displayName: name,
            value,
            differentials,
            urlSale: link,
            valuePromotionalPeriod,
            monthsPromotionalPeriod,
            daysPromotionalPeriod,
            additionalService,
          }) => {
            let promotional: BranchePlanPromotional | undefined;

            if (valuePromotionalPeriod) {
              if (monthsPromotionalPeriod || daysPromotionalPeriod) {
                promotional = {
                  value: valuePromotionalPeriod,
                  period: monthsPromotionalPeriod
                    ? monthsPromotionalPeriod
                    : daysPromotionalPeriod,
                  periodUnit: monthsPromotionalPeriod ? "month" : "day",
                };
              } else {
                console.error(
                  "Invalid promotional period (months | days):",
                  monthsPromotionalPeriod,
                  daysPromotionalPeriod
                );
              }
            }

            const result: BranchePlan = {
              name: name!,
              value,
              benefits: differentials
                .sort((a, b) => a.order - b.order)
                .map((d) => d.title),
              link: link!,
            };

            if (promotional) result.promotional = promotional;
            if (additionalService)
              result.additionalService = {
                name: additionalService.name.replaceAll("*", "").trim(),
                value: additionalService.value,
              };

            return result;
          }
        );
    } else {
      const error = await response.json();
      console.error("Error fetching plans from EVO API");
      throw error;
    }
  };
}
