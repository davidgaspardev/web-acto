import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 h-16 w-full flex flex-col bg-[#FEF7FF] z-50">
      <div className="flex-1 flex flex-row justify-center">
        {
          [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Planos",
              link: "/plans"
            },
            {
              name:  "Clube",
              link: "/club"
            }
          ].map(({ name, link }, index) => (
            <Link key={index} href={link} className="h-full w-24 flex flex-col items-center justify-center">
              <h2 className="font-Bree font-bold text-xl text-[#553581]">{name}</h2>
            </Link>
          ))
        }
      </div>
    </header>
  )
}
