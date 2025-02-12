import Image from "next/image";
import Reserva from "./components/Reserva";
import Carrossel from "./components/Carrossel";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen bg-[#FFF8E8] text-center">
      <header className="bg-[url(../public/topo-1.png)] bg-no-repeat bg-center bg-cover w-full h-[740px] flex justify-center pt-4 relative">
        <div>
          <Image src="/ferias-julho-2024.png" alt="Férias de Julho 2024 - Salinas Maragogi" width={787} height={350}/>
          <Image src="/desconto.png" alt="15% de desconto" width={232} height={106} className="rotate-1 absolute right-1/4 top-80"/>
          <Image src="/icones1.svg" alt="" width={1152} height={218} className="absolute left-96 bottom-14"/>
        </div>
      </header>
      <main>
        <div className="relative">
          <div className="flex flex-col mx-[435px] px-[60px] gap-10 pb-36">
            <h2 className="text-[40px] font-semibold text-primaria">FÉRIAS DE JULHO NO SALINAS MARAGOGI <br /> É DIVERSÃO GARANTIDA</h2>

            <p className="text-xl text-terciaria">Férias de Julho é sinônimo de diversão em família! No Salinas Maragogi, <b>as crianças são superestrelas com estadia grátis*</b>, Clubinho Infantil repleto de atividades, buffet especialmente pensado para os pequenos paladares e muito mais!</p>

            <div>
              <h4 className="text-2xl font-semibold text-secundaria">DIÁRIAS A PARTIR DE</h4>
              <h3 className="text-6xl font-semibold text-primaria">R$1.819*</h3>
            </div>

            <div className="mt-10">
              <Reserva />
            </div>

          </div>

          <Image src="/icones2.svg" alt="" width={1465} height={303} className="absolute left-52 top-56"/>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-14 pb-24 bg-[url(../public/bg-ceu.png)] bg-no-repeat bg-bottom">
            <h2 className="text-4xl font-semibold text-primaria">MOTIVOS NÃO FALTAM PARA PASSAR AS FÉRIAS DE JULHO POR AQUI!</h2>

            <div className="px-[400] bg-[url(../public/bgvideo-1.png)] bg-no-repeat bg-center flex justify-center relative">
              <Image src={"/base-video.svg"} alt="" width={405} height={690} className="absolute"/>
              <video width={365.5} height={650} controls preload="auto" className="pt-4 z-10">
                <source src="/salinas-maragogi-video.mp4" type="video/mp4" />
                Seu navegador não suporta o vídeo
              </video>
            </div>

            <div className="flex justify-center mt-10">
              <Image src={"/motivos.svg"} alt="" width={966} height={142}/>
            </div>
          </div>
          
          <Image src="/icones3.svg" alt="" width={1522} height={113} className="absolute left-52 top-32"/>
        </div>

        <div className="bg-[#6FCDFF] pt-40 flex flex-col gap-20 bg-[url(../public/bg-clubinho.svg)] bg-no-repeat pb-[400px]">
          <div>
            <h2 className="text-[40px] font-semibold text-primaria">CLUBINHO DO SIRI</h2>
            <h3 className="text-2xl font-semibold text-primaria">O CLUBE INFANTIL QUE A CRIANÇADA AMA!</h3>
          </div>

          <ul className="grid grid-cols-2 gap-x-[400px] gap-y-8 text-left mx-96 text-xl text-white list-[url(../public/mini-carangueijo.svg)]">
            <li className="flex items-start gap-1 align-top">
              <Image src={"/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
              Diversos jogos, oficinas e atividades ao ar livre para crianças de 4 a 12 anos.
            </li>
            <li className="flex items-start gap-1 align-top">
              <Image src={"/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
              Os tios e tias também acompanham as crianças no lanchinho da manhã, almoço e lanchinho da tarde.
            </li>
            <li className="flex items-start gap-1 align-top">
              <Image src={"/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
              Colaboradores preparados para cuidar e garantir a diversão da criançada.
            </li>
            <li className="flex items-start gap-1 align-top">
              <Image src={"/mini-carangueijo.svg"} alt="" width={29.3} height={28}/>
              Estrutura pensada na diversão e segurança dos pequenos.
            </li>
          </ul>
        </div>

        <div className="bg-[#F4E3B3]">
          <button><Image src={"/reserve1.svg"} alt="" width={372} height={68.49}/></button>
        </div>

        <div className="relative">
          <div className="bg-[#F4E3B3] pt-36">
            <h2 className="text-[40px] font-semibold text-primaria">FÉRIAS ESCOLARES COM SABOR DE DIVERSÃO!</h2>

            <div className="flex justify-center pt-[30px]">
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(../public/base-criancas-gratis.png)] bg-no-repeat w-[415px] h-[415px] interativo relative overflow-hidden">
                  <Image src={"/criancas-gratis.png"} alt="Crianças grátis*" width={330} height={176} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xl">pequenos de até 12 anos não pagam se acompanhada de adultos pagantes*</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(../public/base-quartos-familia.png)] bg-no-repeat w-[415px] h-[415px] interativo relative overflow-hidden">
                  <Image src={"/quartos-familia.png"} alt="Crianças grátis*" width={330} height={176} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xl">pequenos de até 12 anos não pagam se acompanhada de adultos pagantes*</p>
                  <div className="retangulo"></div>
              </div>
              <div className="flex flex-col items-center justify-end pb-7 bg-[url(../public/base-all-inclusive.png)] bg-no-repeat w-[415px] h-[415px] interativo relative overflow-hidden">
                  <Image src={"/all-inclusive.png"} alt="Crianças grátis*" width={330} height={176} className="z-10 titulo"/>
                  <p className="conteudo absolute -bottom-40 text-white z-10 px-8 text-xl">pequenos de até 12 anos não pagam se acompanhada de adultos pagantes*</p>
                  <div className="retangulo"></div>
              </div>
            </div>
          </div>
          
          <Image src="/icones4.svg" alt="" width={1529} height={217} className="absolute left-52 top-0"/>
        </div>

        <div>
          <Carrossel />
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center relative bg-primaria text-white">
        <Image src={"/onda-rodape.svg"} alt="" width={1900} height={18.3} className="bg-primaria"/>

        <div className="bg-primaria w-full px-8 pt-10 pb-[30px]">
          <div className="flex w-full justify-between items-center pb-10">
            <a href="#" className="w-72">
              <Image src={"/logo-salinas-maragogi.svg"} alt="" width={169.3} height={72}/>
            </a>

            <button className="bg-secundaria rounded-xl text-[30px] font-semibold px-12 py-4">VEJA OUTROS PERÍODOS</button>

            <div className="flex gap-5">
              <a href="https://web.facebook.com/salinasmaragogi/?locale=pt_BR&_rdc=1&_rdr#" target="_blank">
                <Image src={"/facebook.svg"} alt="" width={38} height={38}/>
              </a>
              <a href="https://www.instagram.com/salinasmaragogi/" target="_blank">
                <Image src={"/instagram.svg"} alt="" width={37} height={38}/>
              </a>
              <a href="https://www.youtube.com/salinasmaragogi" target="_blank">
                <Image src={"/youtube.svg"} alt="" width={53.6} height={38}/>
              </a>
              <a href="https://open.spotify.com/user/wi074zf7qkrgob3o3mkhiyxq6?si=66448c8c965648f6" target="_blank">
                <Image src={"/spotify.svg"} alt="" width={38} height={38}/>
              </a>
              <a href="https://www.tiktok.com/@salinasmaragogi?lang=en" target="_blank">
                <Image src={"/tiktok.svg"} alt="" width={47.5} height={38}/>
              </a>
              </div>
          </div>
          <div>
            <hr className="bg-[#FFD4AB]"/>

            <ul className="py-[30px] flex flex-col gap-3">
              <li>*Criança de 0 a 12 anos de idade, hospedada com dois adultos pagantes na mesma acomodação, conforme capacidade da categoria. A criança deverá ter até 12 anos de idade no momento da hospedagem.</li>
              <li>**Cancelamento grátis até 30 dias antes do check-in. Em caso de cancelamento após este prazo, será cobrada uma multa no valor correspondente a primeira diária. Em caso de no show, será cobrado o valor total da reserva.</li>
              <li>Valor exibido é referente ao apartamento Standard Duplo já calculado o desconto de 5% do programa Tô de Volta, disponível após login no processo de compra.</li>
              <li>No ato da reserva será cobrado do seu cartão de crédito o valor total da hospedagem podendo ser dividido em até 10x.</li>
              <li>Você pode encontrar mínimo de noites e preços diferentes em alguns períodos</li>
            </ul>

            <hr />

            <div className="py-7 flex gap-8 justify-center">
              <p>Política de privacidade</p>
              <p>Copyright 2024 © Grupo Amarante. Todos os direitos reservados.</p>
            </div>

            <div className="flex justify-center">
              <Image src={"/amarante.svg"} alt="" width={212} height={80}/>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}