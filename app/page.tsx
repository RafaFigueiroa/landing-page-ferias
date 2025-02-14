import Image from "next/image";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import Reserva from "../components/Reserva";
import Galeria from "../components/Galeria";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen bg-[#FFF8E8] text-center text-primaria">
      <Header />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-center relative -mt-5 overflow-hidden">
          <div className="flex flex-col items-center px-[60px] w-[1026px] gap-2 pb-28 relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold w-96 sm:w-full">FÉRIAS DE JULHO NO SALINAS MARAGOGI <br /> É DIVERSÃO GARANTIDA</h2>

            <p className="text-sm md:text-base lg:text-lg text-terciaria w-72 sm:w-full">Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi, <b>as crianças são superestrelas com estadia grátis*</b>, Clubinho Infantil repleto de atividades, buffet especialmente pensado para os pequenos paladares e muito mais!</p>

            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-secundaria">DIÁRIAS A PARTIR DE</h4>
              <h3 className="text-5xl sm:text-6xl font-semibold">R$1.819*</h3>
            </div>

            <div className="pt-9" id="reserva">
              <Reserva />
            </div>
          </div>

          <div className="absolute top-72 flex items-start justify-between w-[1200px]">
            <Image src="/reserva/icones-maragogi2.svg" alt="" width={146} height={146}/>
            <Image src="/reserva/icones-maragogi2.svg" alt="" width={146} height={146} className="rotate-180"/>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full overflow-hidden -bottom-px">
          <div className="flex flex-col justify-center sm:gap-14 mb-[20px] w-full z-10">
            <div className="flex justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold w-[450px] sm:w-[900px] xl:w-[1250px]">MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!</h2>
            </div>

            <div className="bg-[url(/motivos/bg-video-maragogi.svg)] bg-no-repeat bg-center flex justify-center relative">
              <Image src={"/motivos/base-video.svg"} alt="" width={405} height={690} className="absolute w-[303px] h-[515px] mt-20 sm:w-[405px] sm:h-[690px] sm:mt-0"/>
              <video width={365.5} height={650} controls preload="auto" className="pt-[20px] z-10 w-[275px] h-[502px] my-20 sm:w-[365.5px] sm:h-[650px] sm:my-0">
                <source src="/motivos/salinas-maragogi-video.mp4" type="video/mp4" />
                Seu navegador não suporta o vídeo
              </video>
            </div>

            <div className="flex justify-center pb-[19px]">
              <div className="grid grid-cols-2 justify-items-center w-[300px] sm:w-[400px] gap-y-2 sm:gap-y-8 xl:flex xl:justify-between xl:w-[966px] mt-10 *:scale-90 sm:*:scale-100">
                <Image src={"/motivos/motivo-maragogi1.svg"} alt="" width={124.8} height={120}/>
                <Image src={"/motivos/motivo-maragogi2.svg"} alt="" width={124.5} height={120}/>
                <Image src={"/motivos/motivo-maragogi3.svg"} alt="" width={141.3} height={120}/>
                <Image src={"/motivos/motivo-maragogi4.svg"} alt="" width={82} height={120}/>
                <Image src={"/motivos/motivo-maragogi5.svg"} alt="" width={146.8} height={142}/>
                <Image src={"/motivos/motivo-maragogi6.svg"} alt="" width={96.5} height={120}/>
              </div>
            </div>
          </div>

          <div className="absolute top-96 flex min-w-[1900px]">
            <Image src="/motivos/bg-ceu.svg" alt="" width={1900} height={642}/>
          </div>
          
          <div className="absolute top-32 flex items-start justify-between w-[1200px]">
            <Image src="/motivos/icones-maragogi3.svg" alt="" width={53} height={42.1}/>
            <Image src="/motivos/icones-maragogi3.svg" alt="" width={53} height={42.1} className="rotate-180"/>
          </div>
        </div>

        <div className="relative flex justify-center bg-[#6FCDFF] max-w-[1900px] w-full -mt-[375px] pt-[375px] sm:-mt-[341px] sm:pt-[339px] xl:mt-0 xl:pt-0 overflow-hidden">
          <div className="pt-40 flex flex-col gap-14 w-full pb-64 sm:pb-[420px] xl:pb-[350px] 2xl:pb-[430px] z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">CLUBINHO DO SIRI</h2>
              <h3 className="text-xl sm:text-2xl font-semibold px-2">O CLUBE INFANTIL QUE A CRIANÇADA AMA!</h3>
            </div>

            <ul className="flex flex-col items-center xl:flex-row justify-between w-full pl-0 max-w-[1180px] gap-8 px-2 text-left mx-auto md:text-lg text-white list-[url(/clubinho/mini-carangueijo.svg)]">
              <div className="flex flex-col gap-8 max-w-[372px]">
                <li className="flex items-start gap-1 align-top">
                  <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28} className="size-5 sm:size-7"/>
                  Diversos jogos, oficinas e atividades ao ar livre para crianças de 4 a 12 anos.
                </li>
                <li className="flex items-start gap-1 align-top">
                  <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28} className="size-5 sm:size-7"/>
                  Os tios e tias também acompanham as crianças no lanchinho da manhã, almoço e lanchinho da tarde.
                </li>
              </div>

              <div className="flex flex-col gap-8 max-w-[372px]">
                <li className="flex items-start gap-1 align-top">
                  <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28} className="size-5 sm:size-7"/>
                  Colaboradores preparados para cuidar e garantir a diversão da criançada.
                </li>
                <li className="flex items-start gap-1 align-top">
                  <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28} className="size-5 sm:size-7"/>
                  Estrutura pensada na diversão e segurança dos pequenos.
                </li>
              </div>
            </ul>
          </div>

          <div className="absolute bottom-0 w-[800px] sm:w-[1280px] xl:w-full -mb-[1px]">
            <Image src="/clubinho/prainha-maragogi.svg" alt="" width={1900} height={652}/>
          </div>

          <div className="absolute top-18 xl:top-1 w-[800px] lg:w-[1214px]">
            <Image src="/clubinho/sol-nuvens.svg" alt="" width={1214} height={200}/>
          </div>
        </div>

        <div className="bg-[#F4E3B3] pt-1 w-full max-w-[1900px]">
          <a href="#reserva" className="flex justify-center scale-90 sm:scale-100"><Image src={"/cta/reserve-maragogi.svg"} alt="" width={310} height={57}/></a>
        </div>

        <div className="relative overflow-hidden w-full max-w-[1900px]">
          <div className="bg-[#F4E3B3] pt-28">
            <h2 className="text-2xl md:text-4xl font-semibold px-2">FÉRIAS ESCOLARES COM SABOR DE DIVERSÃO!</h2>

            <div className="flex flex-col items-center xl:flex-row justify-center pt-[30px] relative z-10">
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-criancas-gratis-maragogi.png)] bg-no-repeat bg-top w-[252px] h-[252px] sm:w-[377px] sm:h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/criancas-gratis.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xs sm:text-base">Pequenos de até 12 anos não pagam se acompanhada de adultos pagantes*</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-quartos-familia-maragogi.png)] bg-no-repeat bg-bottom w-[252px] h-[252px] sm:w-[377px] sm:h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/quartos-familia.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xs sm:text-base">Categorias de quartos que acomodam toda família</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-all-inclusive-maragogi.png)] bg-no-repeat bg-top w-[252px] h-[252px] sm:w-[377px] sm:h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/all-inclusive.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xs sm:text-base">Para os pequenos também! O Salinas Maragogi possui buffet infantil</p>
                  <div className="retangulo"></div>
              </div>
            </div>
          </div>
          
          <Image src="/topicos/icones4.svg" alt="" width={179} height={81} className="absolute left-52 bottom-52"/>
          <Image src="/topicos/icones4.svg" alt="" width={179} height={81} className="absolute right-48 bottom-20  rotate-180"/>
        </div>

        <div className="w-full max-w-[1900px]">    
          <Galeria />
        </div>
      </main>
      <Footer />
    </div>
  );
}