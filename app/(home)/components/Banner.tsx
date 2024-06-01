import ActoLogoPurple from "@/assets/svg/acto-logo-purple.svg";
import ActoBanner from "@/assets/svg/acto-bunner.svg";
import Image from "next/image";

export function Banner() {
  return (
    <div className="w-full h-48 flex items-center justify-center"
    style={{
      backgroundImage: `url(${ActoBanner.src})`
    }}>
      <Image
        src={ActoLogoPurple}
        alt="Acto logo purple"
        width={256}
        className="max-sm:w-[180px]"/>
    </div>
  );
}
