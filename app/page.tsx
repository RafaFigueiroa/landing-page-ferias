import Image from "next/image";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import Reserva from "../components/Reserva";
import Galeria from "../components/Galeria";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen bg-[#FFF8E8] text-center text-primaria">
      <Header />
      <main>
        <div className="w-full flex justify-center relative -mt-5 overflow-hidden">
          <div className="flex flex-col px-[60px] w-[1026px] gap-2 pb-28 relative">
            <h2 className="text-4xl font-semibold">FÉRIAS DE JULHO NO SALINAS MARAGOGI <br /> É DIVERSÃO GARANTIDA</h2>

            <p className="text-lg text-terciaria">Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi, <b>as crianças são superestrelas com estadia grátis*</b>, Clubinho Infantil repleto de atividades, buffet especialmente pensado para os pequenos paladares e muito mais!</p>

            <div>
              <h4 className="text-2xl font-semibold text-secundaria">DIÁRIAS A PARTIR DE</h4>
              <h3 className="text-6xl font-semibold">R$1.819*</h3>
            </div>

            <div className="mt-9">
              <Reserva />
            </div>
          </div>

          <div className="absolute top-96 flex items-start justify-between w-[1200px]">
            <Image src="/reserva/icones-maragogi2.svg" alt="" width={146} height={146}/>
            <Image src="/reserva/icones-maragogi2.svg" alt="" width={146} height={146} className="rotate-180"/>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-14 pb-24 bg-[url(/motivos/bg-ceu.svg)] bg-no-repeat bg-bottom -mb-[2px]">
            <h2 className="text-3xl font-semibold">MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!</h2>

            <div className="px-[400px] bg-[url(/motivos/bg-video-maragogi.svg)] bg-no-repeat bg-center flex justify-center relative">
              <Image src={"/motivos/base-video.svg"} alt="" width={405} height={690} className="absolute"/>
              <video width={365.5} height={650} controls preload="auto" className="pt-[20px] z-10">
                <source src="/motivos/salinas-maragogi-video.mp4" type="video/mp4" />
                Seu navegador não suporta o vídeo
              </video>
            </div>

            <div className="flex justify-center mt-10">
              <Image src={"/motivos/motivo-maragogi1.svg"} alt="" width={124.8} height={120}/>
              <Image src={"/motivos/motivo-maragogi2.svg"} alt="" width={124.5} height={120}/>
              <Image src={"/motivos/motivo-maragogi3.svg"} alt="" width={141.3} height={120}/>
              <Image src={"/motivos/motivo-maragogi4.svg"} alt="" width={82} height={120}/>
              <Image src={"/motivos/motivo-maragogi5.svg"} alt="" width={146.8} height={142}/>
              <Image src={"/motivos/motivo-maragogi6.svg"} alt="" width={96.5} height={120}/>
            </div>
          </div>
          
          <Image src="/motivos/icones-maragogi3.svg" alt="" width={53} height={42.1} className="absolute left-44 top-44"/>
          <Image src="/motivos/icones-maragogi3.svg" alt="" width={53} height={42.1} className="absolute right-44 top-40 rotate-180"/>
        </div>

        <div className="relative flex justify-center bg-[#6FCDFF]">
          <div className="pt-40 flex flex-col gap-20 bg-[url(/clubinho/prainha-maragogi.svg)] bg-no-repeat bg-bottom pb-[440px] z-10 -mb-[1px]">
            <div>
              <h2 className="text-[40px] font-semibold">CLUBINHO DO SIRI</h2>
              <h3 className="text-2xl font-semibold">O CLUBE INFANTIL QUE A CRIANÇADA AMA!</h3>
            </div>

            <ul className="grid grid-cols-2 gap-x-[400px] gap-y-8 text-left mx-96 text-lg text-white list-[url(/clubinho/mini-carangueijo.svg)]">
              <li className="flex items-start gap-1 align-top">
                <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
                Diversos jogos, oficinas e atividades ao ar livre para crianças de 4 a 12 anos.
              </li>
              <li className="flex items-start gap-1 align-top">
                <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
                Os tios e tias também acompanham as crianças no lanchinho da manhã, almoço e lanchinho da tarde.
              </li>
              <li className="flex items-start gap-1 align-top">
                <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
                Colaboradores preparados para cuidar e garantir a diversão da criançada.
              </li>
              <li className="flex items-start gap-1 align-top">
                <Image src={"/clubinho/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
                Estrutura pensada na diversão e segurança dos pequenos.
              </li>
            </ul>
          </div>

          <Image src="/clubinho/sol-nuvens.svg" alt="" width={1214} height={200} className="absolute top-1"/>
        </div>

        <div className="bg-[#F4E3B3] pt-1">
          <button><Image src={"/cta/reserve-maragogi.svg"} alt="" width={310} height={57}/></button>
        </div>

        <div className="relative">
          <div className="bg-[#F4E3B3] pt-28">
            <h2 className="text-4xl font-semibold">FÉRIAS ESCOLARES COM SABOR DE DIVERSÃO!</h2>

            <div className="flex justify-center pt-[30px] relative z-10">
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-criancas-gratis-maragogi.png)] bg-no-repeat w-[377px] h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/criancas-gratis.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8">Pequenos de até 12 anos não pagam se acompanhada de adultos pagantes*</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-quartos-familia-maragogi.png)] bg-no-repeat w-[377px] h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/quartos-familia.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8">Categorias de quartos que acomodam toda família</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(/topicos/base-all-inclusive-maragogi.png)] bg-no-repeat w-[377px] h-[377px] interativo relative overflow-hidden">
                  <Image src={"/topicos/all-inclusive.svg"} alt="Crianças grátis*" width={300} height={160} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8">Para os pequenos também! O Salinas Maragogi possui buffet infantil</p>
                  <div className="retangulo"></div>
              </div>
            </div>
          </div>
          
          <Image src="/topicos/icones4.svg" alt="" width={179} height={81} className="absolute left-52 bottom-52"/>
          <Image src="/topicos/icones4.svg" alt="" width={179} height={81} className="absolute right-48 bottom-20  rotate-180"/>
        </div>

        <div> 
          <Galeria />
        </div>
      </main>
      <Footer />
    </div>
  );
}