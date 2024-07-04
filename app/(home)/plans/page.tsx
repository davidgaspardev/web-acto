import { branches } from "@/helpers/data";
import { BrancheInfo } from "@/helpers/types";
import Image from "next/image";
import Link from "next/link";

export default function BranchesPage() {
  return (
    <div className="flex flex-col items-center w-full my-12">
      <div className="flex flex-row justify-center gap-16 items-center min-h-[calc(100vh-64px)] flex-wrap max-w-[800px]">
        {
          branches.map((branche, index) => <BrancheCard key={index} data={branche} />)
        }
      </div>
    </div>
  );
}

type BrancheCardProps = {
  data: BrancheInfo
}

function BrancheCard(props: BrancheCardProps) {
  const { name, address, neighborhood, city, state, zipCode, slug, imageUrl } = props.data;

  return (
    <div className="w-[350px] h-96 rounded-b-[40px] rounded-tl-[40px] bg-[#FEF7FF] flex flex-col p-4 relative">
      <div className="flex-1">
        <Image
        unoptimized
          src={imageUrl}
          alt="Branche"
          width={256}
          height={0}
          className="rounded-b-[40px] rounded-tl-[40px] object-cover w-full h-full"/>
      </div>
      <div className="h-32 text-center font-Bree text-[#553581]">
        <h1 className="text-2xl mb-2"><strong>{name}</strong></h1>
        <h2 className="text-sm">{address}</h2>
        <h2 className="text-sm"><strong>{neighborhood}, {city} ({state})</strong> {zipCode}</h2>
      </div>

      <Link
        href={`/plans/${slug}`}
        className="h-12 w-48 font-Bree text-xl rounded-b-3xl rounded-tr-3xl bg-[#553682] text-white flex items-center justify-center absolute -bottom-5 left-[calc(50%-96px)]">
        <strong>Contratar</strong>
      </Link>
    </div>
  )
}

