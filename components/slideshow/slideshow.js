"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Chicken from "@/assets/slideshow/chicken.jpg";
import Egg from "@/assets/slideshow/egg.jpg";
import Mutton from "@/assets/slideshow/mutton.jpg";
import Fish from "@/assets/slideshow/fish.jpg";
import SlideStyles from "./slideshow.module.css";

export default function SlideShow() {
    const images = [
        {
            image: Chicken,
            alt: "Chicken"
        },
        {
            image: Egg,
            alt: "Egg"
        },
        {
            image: Mutton,
            alt: "Mutton"
        },
        {
            image: Fish,
            alt: "Fish"
        }
    ];
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => prev < images.length - 1 ? prev + 1 : 0);
        }, 2000)

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={SlideStyles.slideshow}>
            {images.map((item, index) => (
                <Image
                    key={index}
                    src={item.image}
                    alt={item.alt}
                    className={slideIndex === index ? SlideStyles.active : ''}
                />
            ))}
        </div>
    )
}
