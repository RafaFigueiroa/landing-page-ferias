"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import items from "../public/galeria/items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Galeria() {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  let colecao = [];

  if (pathname.endsWith("/")) {
    const { maragogi } = items;
    colecao = maragogi;
  } else if (pathname.endsWith("/maceio")) {
    const { maceio } = items;
    colecao = maceio;
  } else {
    return (
      <>Erro!</>
    );
  }

  return (
    <div className="pt-20 pb-10 sm:pt-36 sm:pb-20 bg-[#F4E3B3] px-2 z-10">
      <Carousel activeIndex={index} onSelect={handleSelect} className="pb-4 relative">
        {colecao.map((item) => {
          return (
            <Carousel.Item key={item.id} className="justify-items-center" interval={4000}>
                <Image src={item.imageUrl} alt="slides" width={873} height={545}/>
                <p className="text-terciaria mt-2">{item.body}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}