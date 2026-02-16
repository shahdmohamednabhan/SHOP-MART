 


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // الطريقة الجديدة مع Swiper 10+
import "swiper/css/autoplay";

interface SliderProps {
  images: string[];
  title?: string;
}

export default function Slider({ images, title = "Slide" }: SliderProps) {
  if (!images || images.length === 0) return null;

  return (
    <Swiper
      loop
      autoplay={{ delay: 1000, disableOnInteraction: false }}  
      modules={[Autoplay]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`${title} ${index + 1}`}
            className="w-full object-contain rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
