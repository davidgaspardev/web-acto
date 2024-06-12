import { branches } from "@/helpers/data";
import Plans from "@/app/(home)/components/Plans";
import EvoApiClient from "@/app/api/services/evo";
import { BrancheInfo } from "@/helpers/types";

export async function getPlans(branche: BrancheInfo) {
  const evoApiClient = EvoApiClient.getInstance();
  return await evoApiClient.getPlansByBranchId(branche.id);
}

type PageProps = {
  params: {
    branche: string;
  }
}

export default async function Page(props: PageProps) {
  const { branche: slug } = props.params;

  const branche = branches.find(branche => branche.slug === slug);

  if(!branche) {
    return (
      <div>
        <h1>Unidade não existente</h1>
      </div>
    );
  }

  const plansSync = await getPlans(branche);
  for (const plan of plansSync) {
    for (const planOld of branche.plans) {
      if (plan.name === planOld.name) {
        planOld.benefits = plan.benefits;
        planOld.value = plan.value;
        planOld.link = plan.link;
      }
    }
  }

  return (
    <div>
      <Plans data={branche} />
    </div>
  );
}
