import { branches } from "@/helpers/data";
import Plans from "@/app/(home)/components/Plans";

type PageProps = {
  params: {
    branche: string;
  }
}

export default function Page(props: PageProps) {
  const { branche: slug } = props.params;

  const branche = branches.find(branche => branche.slug === slug);

  if(!branche) {
    return (
      <div>
        <h1>Unidade não existente</h1>
      </div>
    );
  }

  return (
    <div>
      <Plans data={branche} />
    </div>
  );
}
