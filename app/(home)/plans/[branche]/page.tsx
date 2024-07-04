import { branches } from "@/helpers/data";
import Plans from "@/app/(home)/components/Plans";
import EvoApiClient from "@/app/api/services/evo";
import { BrancheInfo } from "@/helpers/types";
import Link from "next/link";

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
  if (branche.plans.length) {
    return (
      <div className="flex flex-col items-center justify-center font-Bree text-black h-[calc(100vh-416px)]">
        <div>
          <h1 className="text-2xl text-[#3c2063]">Essa unidade ainda não possui planos...</h1>
          <p className="text-[#3c2063]">Por favor tente novamente mais tarde</p>
        </div>

        <Link
            href={`https://wa.me/message/4TNN74AZUSRTJ1`}
            target="_blank"
            className="h-12 w-60 font-Bree text-xl rounded-b-3xl rounded-tr-3xl bg-[#553682] text-white flex items-center justify-center absolute bottom-24 sm:bottom-30px md:bottom-44 left-[calc(50%-120px)]">
            <strong>Entrar para o grupo VIP</strong>
          </Link>
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
