import Link from "next/link";
import Image from "next/image";
import IconShareFacebook from "@/assets/svg/ic-share-facebook.svg";
import IconShareInstagram from "@/assets/svg/ic-share-instagram.svg";
import IconShareLinkedIn from "@/assets/svg/ic-share-linkedin.svg";
import IconShareYouTube from "@/assets/svg/ic-share-youtube.svg";

export function Footer() {
  return (
    <footer className="w-full h-40 bg-[#CABBCA] flex flex-col items-center justify-center font-Bree font-bold text-[#553682]">
      <h1>Acto Academia</h1>
      <h1 className="-mt-2">CREF 001670-PJ/PE</h1>
      <div className="flex flex-row gap-4 my-2">
        <Link href={""}>
          <Image
            src={IconShareFacebook}
            alt="Facebook share"
            width={32}/>
        </Link>
        <Link href={""}>
          <Image
            src={IconShareInstagram}
            alt="Instagram share"
            width={32}/>
        </Link>
        <Link href={""}>
          <Image
            src={IconShareLinkedIn}
            alt="LinkedIn share"
            width={32}/>
        </Link>
        <Link href={""}>
          <Image
            src={IconShareYouTube}
            alt="YouTube share"
            width={32}/>
        </Link>
      </div>
      <h1>Pernambuco, Brasil - 2024</h1>
    </footer>
  );
}
