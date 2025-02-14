"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[url(/header/topo-maragogi.png)] bg-cover bg-bottom w-full h-[450px] sm:h-[600px] overflow-hidden">
      <div className="flex flex-col items-center relative pt-4 space-y-14 sm:space-y-36 mx-2">
        <Image src="/header/ferias-julho-maragogi.svg" alt="Férias de Julho 2024 - Salinas Maragogi" width={524.6} height={233.3} className="w-96 sm:w-[525px]"/>
        <Image src="/header/desconto-maragogi.svg" alt="15% de desconto" width={155} height={71} className="rotate-1 absolute left-2/3 top-24 size-28 md:size-40"/>

        <div className="flex justify-around w-[1552px]">
          <Image src="/header/icones-maragogi1.svg" alt="" width={150} height={75}/>
          <Image src="/header/icones-maragogi1.svg" alt="" width={150} height={75} className="rotate-180"/>
        </div>
      </div>
    </header>
  );
}