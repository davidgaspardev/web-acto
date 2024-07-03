import { branches } from "@/helpers/data";
import Plans from "@/app/(home)/components/Plans";
import EvoApiClient from "@/app/api/services/evo";
import { BrancheInfo } from "@/helpers/types";

async function getPlans(branche: BrancheInfo) {
  const evoApiClient = EvoApiClient.getInstance();
  return await evoApiClient.getPlansByBranchId(branche.id);
}

type PageProps = {
  params: {
    branche: string;
  };
};

export default async function Page(props: PageProps) {
  const { branche: slug } = props.params;

  const branche = branches.find((branche) => branche.slug === slug);

  if (!branche) {
    return (
      <div>
        <h1>Unidade não existente</h1>
      </div>
    );
  }

  branche.plans = await getPlans(branche);
  if (!branche.plans.length) {
    return (
      <div className="flex flex-col items-center justify-center font-Bree text-black h-auto">
       <div>
       <h1>Essa unidade ainda não possui planos!</h1>
       <p>Por favor tente novamente mais tarde</p>
       </div>
      </div>
    );
  }

  return (
    <div>
      <Plans data={branche} />
    </div>
  );
}

export const dynamic = 'force-static';
export const revalidate = 60;
