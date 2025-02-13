import Image from "next/image";

export default function Header() {
    return (
      <header className="bg-[url(../public/topo-1.png)] bg-no-repeat bg-center bg-cover w-full h-[740px] flex justify-center pt-4 relative">
        <div>
          <Image src="/ferias-julho-2024.png" alt="Férias de Julho 2024 - Salinas Maragogi" width={787} height={350}/>
          <Image src="/desconto.png" alt="15% de desconto" width={232} height={106} className="rotate-1 absolute right-1/4 top-80"/>
          <Image src="/icones1.svg" alt="" width={1152} height={218} className="absolute left-96 bottom-14"/>
        </div>
      </header>
    );
}