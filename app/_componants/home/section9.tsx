import Image, { StaticImageData } from "next/image";
import React from "react";
import bg from "@/app/assets/home/section9-bg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testi1 from "@/app/assets/home/section9/testi1.png";
import testi2 from "@/app/assets/home/section9/testi2.png";
import testi3 from "@/app/assets/home/section9/testi3.png";
import { Rating } from "./rating";
import { TestimonialCard } from "./testimonial-card";
const testimonials: {
  fullName: string;
  position: string;
  img: StaticImageData;
  text: string;
  rate: number;
}[] = [
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi1,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi2,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi3,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi1,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi2,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
  {
    fullName: "Regina Miles",
    position: "Designer",
    img: testi3,
    text: "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    rate: 4,
  },
];
export const Section9 = () => {
  return (
    <div className="relative flex h-full w-full justify-center items-center">
      <Image src={bg} alt="bg" className="absolute -z-10 h-full" />
      <div className="flex flex-col justify-center items-center gap-16 py-24">
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="text-6xl text-[#032877] font-bold">What Clients Say</p>
          <p className="text-lg text-[#032877] w-[520px] text-center">
            Client satisfaction is our top priority. We pride ourselves on
            delivering exceptional service and outstanding results that exceed
            expectations.
          </p>
        </div>
        <Carousel className="w-[90%] h-fit">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 justify-center items-center flex"
              >
                <TestimonialCard
                  fullName={testimonial.fullName}
                  position={testimonial.position}
                  img={testimonial.img}
                  rate={testimonial.rate}
                  text={testimonial.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant={"link"}
            className="text-sky-600 disabled:text-transparent"
          />
          <CarouselNext
            variant={"link"}
            className="text-sky-600 disabled:text-transparent"
          />
        </Carousel>
      </div>
    </div>
  );
};
