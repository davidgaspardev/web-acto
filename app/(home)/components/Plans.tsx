import { BrancheInfo, PlanType } from "@/helpers/types";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import PlanInfinityMax from "@/assets/svg/plan-infinity-max.svg";
import PlanInfinityStart from "@/assets/svg/plan-infinity-start.svg";
import PlanInfinityStartFidelidade from "@/assets/svg/plan-infinity-start-fidelidade.svg";
import PlanInfinityStartFidelidadeHorarioReduzido from "@/assets/svg/plan-infinity-start-fidelidade-horario-reduzido.svg";
import Link from "next/link";
import { buildWhatsappLink } from "@/helpers/tools";

type PlansProps = {
  data: BrancheInfo
}

export default function Plans(props: PlansProps) {
  const { name: brancheName, plans } = props.data;

  const loadImage = useCallback((planName: PlanType) => {
    return loadImageByPlanType(planName);
  }, [])

  return (
    <div className="flex flex-col items-center w-full my-8">
      <div className="font-Bree text-center text-[#553581] mb-8 text-lg">
        <h1>Undidade</h1>
        <h1 className="-mt-2 font-bold">{brancheName.toUpperCase()}</h1>
      </div>
      <div className="flex flex-row-reverse flex-wrap gap-8 justify-center">
        {
          plans.map(({ name, value, link, benefits }, index) => {
            return (
              <div key={index}>
                <div className="bg-[#FEF7FF] rounded-b-[40px] rounded-tl-[40px] font-Bree text-[#553581] relative">
                  <Image
                    src={loadImage(name)}
                    alt={name}
                    width={220}/>

                  <div className="flex flex-row justify-center items-start">
                    <h1 className=" self-center">R$</h1>
                    {
                      value.toFixed(2).split(".").map((v, index) => (
                        <h1
                          key={index}
                          className={`${index === 0 ? "text-4xl" : "text-lg"} font-semibold`}>{index === 0 ? "" : ","}{v}</h1>
                      ))
                    }
                  </div>
                  <h1 className="text-center -mt-3 pb-8">por mês</h1>

                  <Link
                    href={link}
                    target="_blank"
                    className="h-10 w-32 font-Bree text-xl rounded-b-3xl rounded-tr-3xl bg-[#553682] text-white flex items-center justify-center absolute -bottom-5 left-[calc(50%-64px)]">
                      Eu quero!
                  </Link>
                </div>

                <div className="max-w-[220px] min-h-[320px] mt-8">
                  {
                    benefits.map((benefit, index) => (
                      <div key={index} className="flex flex-row justify-center items-center gap-2">
                        <div className="w-2 h-2 rounded bg-[#94B244]"/>
                        <h3 key={index} className="text-sm text-[#A3A3A2] text-center">{benefit}</h3>
                      </div>
                    ))
                  }
                </div>

                <div className="p-3 text-center bg-[#FEF7FF] rounded-t-[40px] rounded-br-[40px] text-sm relative font-Bree my-4">
                  <h3 className="text-[#553581] pb-2">Recorrência mensal</h3>
                  {/* <h3 className="text-[#553581]">Adesão R$50,00</h3> */}

                  <Link
                    href={buildWhatsappLink(`Olá, gostaria de saber mais sobre o plano ${name} da unidade ${brancheName}.`)}
                    className="bg-[#553682] text-white flex items-center justify-center absolute -bottom-4 py-1 w-[100px] left-[calc(50%-50px)] rounded-b-[15px] rounded-tr-[15px]">
                    Saber mais
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

function loadImageByPlanType(type: PlanType): StaticImageData {
  switch(type) {
    case "INFINITY START – FIDELIDADE":
      return PlanInfinityStartFidelidade;
    case "INFINITY START":
      return PlanInfinityStart;
    case "INFINITY MAX":
      return PlanInfinityMax;
    case "ENGENHO DO MEIO CONTRATO DE ADESÃO – FIDELIDADE":
      return PlanInfinityStartFidelidadeHorarioReduzido;
  }
}
