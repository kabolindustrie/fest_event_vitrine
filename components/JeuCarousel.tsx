"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  images: string[];
}

export default function JeuCarousel({ images }: Props) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[470px] rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flèches dans l'image */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md" />
      </Carousel>
    </div>
  );
}
