import { BranchAdditionalService, BranchInfo, BranchPlanPromotional } from "@/helpers/types";
import Image from "next/image";
import { useCallback } from "react";
import PlanBackgroundGreen from "@/assets/svg/plan-background-green.svg";
import PlanBackgroundPurple from "@/assets/svg/plan-background-purple.svg";
import PlanBackgroundYellow from "@/assets/svg/plan-background-yellow.svg";
import PlanBackgroundPink from "@/assets/svg/plan-background-pink.svg";
import Link from "next/link";
import { buildWhatsappLink } from "@/helpers/tools";

type PlansProps = {
  data: BranchInfo;
};

export default function Plans(props: PlansProps) {
  const { name: brancheName, plans, wppLink } = props.data;

  return (
    <div className="flex flex-col items-center w-full my-8">
      <div className="font-Bree text-center text-[#553581] mb-8 text-lg">
        <h1>Undidade</h1>
        <h1 className="-mt-2 font-bold">{brancheName.toUpperCase()}</h1>
      </div>
      <div className="flex flex-row-reverse flex-wrap gap-8 justify-center">
        {plans?.sort((a, b) => a.value - b.value).map(({ name, value, link, benefits, promotional, additionalService }, index) => {
          return (
            <div key={index}>
              <div className="bg-[#FEF7FF] rounded-b-[55px] rounded-tl-[55px] font-Bree text-[#553581] relative">
                <HeaderPlan name={name} />
                <ContentPlan value={value} promotional={promotional} />
                <Link
                  href={link}
                  target="_blank"
                  className="h-10 w-32 font-Bree text-xl rounded-b-3xl rounded-tr-3xl bg-[#553682] text-white flex items-center justify-center absolute -bottom-5 left-[calc(50%-64px)]"
                >
                  Eu quero!
                </Link>
              </div>

              <div className="max-w-[220px] min-h-[320px] mt-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-center items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded bg-[#94B244]" />
                    <h3
                      key={index}
                      className="text-sm text-[#A3A3A2] text-center"
                    >
                      {benefit}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="p-2 text-center bg-[#FEF7FF] rounded-t-[40px] rounded-br-[40px] text-sm relative font-Bree my-4">
                <div className="pb-2">
                  <h3 className="text-[#553581] opacity-80">Recorrência mensal</h3>
                  {additionalService && (<h3 className="text-[#553581]">{additionalService.name} R${additionalService.value.toFixed(2).replace(".", ",")}</h3>)}
                </div>

                <Link
                  href={wppLink || buildWhatsappLink(
                    `Olá, gostaria de saber mais sobre o plano ${name} da unidade ${brancheName}.`,
                  )}
                  className="bg-[#553682] text-white flex items-center justify-center absolute -bottom-4 py-1 w-[150px] left-[calc(50%-75px)] rounded-b-[15px] rounded-tr-[15px]"
                >
                  Fale com nosso time
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface HeaderPlanProps {
  name: string;
}

function HeaderPlan(props: HeaderPlanProps) {
  const { name } = props;

  const prefixName = name.split(" ")[0].toLowerCase();
  const mainName = name.split(" ").slice(1).join(" ").replaceAll("-", "").replaceAll("–", "");

  const loadBackgroundImage = useCallback((planName: string) => {
    if (planName.includes('START') && planName.includes('FIDELIDADE')) {
      return PlanBackgroundGreen;
    }

    if (planName.includes('START')) {
      return PlanBackgroundPink;
    }

    if (planName.includes('MAX')) {
      return PlanBackgroundPurple;
    }

    return PlanBackgroundYellow
  }, []);

  return (
    <div className="p-[10px] relative">
      <Image className="rounded-tl-[45px] rounded-bl-[45px] rounded-br-[45px]" src={loadBackgroundImage(name)} alt={name} width={220} />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-Bree font-medium capitalize leading-5">{prefixName}</h1>
        <h1 className={`${mainName.length < 10 ? "text-5xl leading-8" : "text-3xl leading-6"} font-black font-Bree`}>{mainName}</h1>
      </div>
    </div>
  )
}

interface ContentPlanProps {
  value: number;
  promotional?: BranchPlanPromotional;
}

function ContentPlan(props: ContentPlanProps) {
  const { value, promotional } = props;

  const hasPromotional = !!promotional;

  return (
    <div className="pb-8">
      <div className={hasPromotional ? "opacity-50" : ""}>
        <div className="flex flex-row justify-center items-start">
          <h1 className="self-center">R$</h1>
          {value
            .toFixed(2)
            .split(".")
            .map((v, index) => (
              <h1
                key={index}
                className={`${index === 0 ? "text-4xl" : "text-lg"} font-semibold ${hasPromotional ? "line-through" : ""}`}
              >
                {index === 0 ? "" : ","}
                {v}
              </h1>
            ))}
        </div>
        <h1 className="text-center -mt-3">por mês</h1>
      </div>
      {hasPromotional && (
        <div>
          <div className="flex flex-row justify-center items-start">
            <h1 className="self-center">R$</h1>
            {promotional.value
              .toFixed(2)
              .split(".")
              .map((v, index) => (
                <h1
                  key={index}
                  className={`${index === 0 ? "text-4xl" : "text-lg"} font-semibold`}
                >
                  {index === 0 ? "" : ","}
                  {v}
                </h1>
              ))}
          </div>
          <h1 className="text-center -mt-3">{promotional.period === 1 ? `No primeiro ${promotional.periodUnit === "month" ? "mês" : "dia"}` : `Nos ${promotional.period} primeiros ${promotional.periodUnit === "month" ? "meses" : "dias"}`}</h1>
        </div>
      )}
    </div>
  )
}
