import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center text-white text-sm -pt-2 overflow-hidden w-full bg-primaria -mt-[3px]">
            <div className="w-full h-[18.27px] bg-[url(/footer/onda-rodape.svg)] bg-center"></div>

            <div className="w-full px-8 pt-10 pb-3 bg-primaria">
                <div className="flex w-full justify-between items-center pb-2">
                    <a href="#" className="w-72">
                        <Image src={"/footer/logo-salinas-maragogi.svg"} alt="" width={112.9} height={48}/>
                    </a>

                    <button className="bg-secundaria rounded-xl text-2xl font-semibold px-12 py-3 duration-300 hover:scale-110">VEJA OUTROS PERÍODOS</button>

                    <div className="flex gap-5">
                        <a href="https://web.facebook.com/salinasmaragogi/?locale=pt_BR&_rdc=1&_rdr#" target="_blank">
                            <Image src={"/footer/facebook.svg"} alt="" width={38} height={38}/>
                        </a>
                        <a href="https://www.instagram.com/salinasmaragogi/" target="_blank">
                            <Image src={"/footer/instagram.svg"} alt="" width={37} height={38}/>
                        </a>
                        <a href="https://www.youtube.com/salinasmaragogi" target="_blank">
                            <Image src={"/footer/youtube.svg"} alt="" width={53.6} height={38}/>
                        </a>
                        <a href="https://open.spotify.com/user/wi074zf7qkrgob3o3mkhiyxq6?si=66448c8c965648f6" target="_blank">
                            <Image src={"/footer/spotify.svg"} alt="" width={38} height={38}/>
                        </a>
                        <a href="https://www.tiktok.com/@salinasmaragogi?lang=en" target="_blank">
                            <Image src={"/footer/tiktok.svg"} alt="" width={47.5} height={38}/>
                        </a>
                    </div>
                </div>
                <div>
                    <hr className="bg-[#FFD4AB]"/>

                    <ul className="py-2 flex flex-col gap-3">
                        <li>*Criança de 0 a 12 anos de idade, hospedada com dois adultos pagantes na mesma acomodação, conforme capacidade da categoria. A criança deverá ter até 12 anos de idade no momento da hospedagem.</li>
                        <li>**Cancelamento grátis até 30 dias antes do check-in. Em caso de cancelamento após este prazo, será cobrada uma multa no valor correspondente a primeira diária. Em caso de no show, será cobrado o valor total da reserva.</li>
                        <li>Valor exibido é referente ao apartamento Standard Duplo já calculado o desconto de 5% do programa Tô de Volta, disponível após login no processo de compra.</li>
                        <li>No ato da reserva será cobrado do seu cartão de crédito o valor total da hospedagem podendo ser dividido em até 10x.</li>
                        <li>Você pode encontrar mínimo de noites e preços diferentes em alguns períodos</li>
                    </ul>

                    <hr />

                    <div className="pt-2 flex gap-8 justify-center">
                        <p>Política de privacidade</p>
                        <p>Copyright 2024 © Grupo Amarante. Todos os direitos reservados.</p>
                    </div>

                    <div className="flex justify-center">
                        <Image src={"/footer/amarante.svg"} alt="" width={106} height={40}/>
                    </div>
                </div>
            </div>

        </footer>
    );
}