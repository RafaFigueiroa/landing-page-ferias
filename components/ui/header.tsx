"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  if (pathname.endsWith("/")) {
    return (
      <header className="bg-[url(/header/topo-maragogi.png)] bg-cover bg-bottom w-full h-[600px] overflow-hidden">
        <div className="flex flex-col items-center relative pt-4 space-y-36">
          <Image src="/header/ferias-julho-maragogi.svg" alt="Férias de Julho 2024 - Salinas Maragogi" width={524.6} height={233.3}/>
          <Image src="/header/desconto-maragogi.svg" alt="15% de desconto" width={155} height={71} className="rotate-1 absolute left-2/3 top-24"/>

          <div className="flex justify-around w-[1552px]">
            <Image src="/header/icones-maragogi1.svg" alt="" width={150} height={75}/>
            <Image src="/header/icones-maragogi1.svg" alt="" width={150} height={75} className="rotate-180"/>
          </div>
        </div>
      </header>
    );
  } else if (pathname.endsWith("/maceio")) {
    return (
      <header className="bg-[url(/header/topo-maceio.png)] bg-cover bg-bottom min-w-[1900px] h-[600px] overflow-hidden">
        <div className="flex flex-col items-center relative pt-4 space-y-36">
          <Image src="/header/ferias-julho-maceio.svg" alt="Férias de Julho 2024 - Salinas Maceio" width={524.6} height={233.3}/>
          <Image src="/header/desconto-maceio.svg" alt="15% de desconto" width={155} height={71} className="rotate-1 absolute left-2/3 top-24"/>

          <div className="flex justify-around w-[1552px]">
            <Image src="/header/icones-maceio1.svg" alt="" width={150} height={75}/>
            <Image src="/header/icones-maceio1.svg" alt="" width={150} height={75} className="rotate-180"/>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <>Erro!</>
    );
  }
}