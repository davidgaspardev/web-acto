import { branches } from "@/helpers/data";
import Plans from "@/app/(home)/components/Plans";
import EvoApiClient from "@/app/api/services/evo";
import { BranchInfo } from "@/helpers/types";
import Link from "next/link";
import { WPP_DIRECT_LINK } from "@/helpers/env";

async function getPlans(branch: BranchInfo) {
  const evoApiClient = EvoApiClient.getInstance();
  return await evoApiClient.getPlansByBranchId(branch.id);
}

type PageProps = {
  params: {
    branch: string;
  };
};

export default async function Page(props: PageProps) {
  const { branch: slug } = props.params;

  const branch = branches.find((branch) => branch.slug === slug);

  if (!branch) {
    return (
      <div>
        <h1>Unidade não existente</h1>
      </div>
    );
  }

  branch.plans = await getPlans(branch);
  if (!branch.plans.length) {
    return (
      <div className="flex flex-col items-center justify-center font-Bree text-black min-h-[calc(100vh-416px)] py-8 px-4">
        <div>
          <h1 className="text-2xl text-[#3c2063] text-center">Estamos finalizando alguns ajustes da nova unidade, e logo mais vamos contar tuda a vocês.</h1>
          <p className="text-[#3c2063] text-center">Em breve divulgaremos mais informações, lembrando que para participar da condição especial de inauguração é necessário permanecer no grupo e se cadastrar para receber o voucher.</p>
        </div>

        <Link
            href={WPP_DIRECT_LINK}
            target="_blank"
            className="h-12 w-60 font-Bree text-xl rounded-b-3xl rounded-tr-3xl bg-[#553682] text-white flex items-center justify-center mt-4">
            <strong>Entrar para o grupo VIP</strong>
          </Link>
      </div>
    );
  }

  return (
    <div>
      <Plans data={branch} />
    </div>
  );
}

export const dynamic = 'force-static';
export const revalidate = 60;
