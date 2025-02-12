"use client";
import { useState } from "react";
import items from "../../public/items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-32 bg-[#F4E3B3]">
        <Carousel activeIndex={index} onSelect={handleSelect} className="pb-4">
        {bootstrap.map((item) => (
            <Carousel.Item key={item.id} className="justify-items-center" interval={2000}>
                <Image src={item.imageUrl} alt="slides" width={960} height={600}/>
                <p className="text-terciaria mt-2">{item.body}</p>
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
}