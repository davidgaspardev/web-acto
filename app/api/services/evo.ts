import { loadBasicAuthHeaderValue } from "@/helpers/auth";
import { EVO_API_BASE_URL, EVO_API_PASSWORD, EVO_API_USERNAME } from "@/helpers/env";
import { Membership, PlanEvoData } from "@/helpers/types";

export default class EvoApiClient {
  private static instance: EvoApiClient;
  private constructor() {}

  public static getInstance(): EvoApiClient {
    if (!this.instance) this.instance = new EvoApiClient();

    return this.instance;
  }

  public getPlansByBranchId = async (
    branchId: number
  ): Promise<Array<PlanEvoData>> => {
    const url = `${EVO_API_BASE_URL}/v1/membership?idBranch=${branchId}&active=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: loadBasicAuthHeaderValue(EVO_API_USERNAME, EVO_API_PASSWORD),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.status === 200) {
      const membershipList: Array<Membership> = await response.json();
      return membershipList
        .filter(
          (membership) =>
            membership.displayName?.startsWith("INFINITY") &&
            membership.displayName?.length <= 30 &&
            membership.urlSale &&
            membership.differentials.length > 0
        )
        .map<PlanEvoData>(
          ({ displayName: name, value, differentials, urlSale: link }) => ({
            name: name!,
            value,
            benefits: differentials
              .sort((a, b) => a.order - b.order)
              .map((d) => d.title),
            link: link!,
          })
        );
    } else {
      const error = await response.json();
      console.error("Error fetching plans from EVO API");
      throw error;
    }
  };
}
