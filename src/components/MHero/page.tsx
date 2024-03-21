"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../elements/Button/page";

export default function MHero() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="md:my-10 mb-6">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="lg:py-40 pt-40 md:text-left text-center">
            <span>Hello, My name is</span>
            <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-3xl md:my-4 uppercase my-4 font-bold text-black">
              Muzammil Safdar.
            </h1>
            <span className="flex gap-2 md:justify-start justify-center mb-4">
              
              <span className="font-bold">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Javascript Developer.",
                      "React JS Developer.",
                      "Next JS Developer.",
                      "Frontend Developer.",
                      "Backend Developer.",
                      "Node JS Developer.",
                      "SQL Developer.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <p className="text-base font-normal mb-7 text-slate-500 leading-7">
              I am a Javascript developer with expertise in full-stack web
              development. I have a strong understanding of the Javascript
              framework and its ecosystem. I am passionate about creating
              efficient, scalable, and user-friendly web applications.
            </p>
            <div className="mt-6 flex items-center md:justify-start justify-center gap-4">
            
              <Button href={"/hireme"} text={"Hire Me"} className={"py-2 px-6"} />
              <div className="lg:block hidden">
                <Social />
              </div>
            </div>
          </div>
          <div className="md:pt-40 pt-8">
            <Slider {...settings}>
              {SliderImage.map((data: any) => {
                return (
                  <div
                    className="relative rounded-lg"
                    key={data.id}
                  >
                    <Image
                      key={data.id}
                      src={data.image}
                      alt=""
                      height={720}
                      width={1280}
                      className="w-full px-2 h-auto rounded-lg"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

const SliderImage = [
  {
    id: "0",
    image: "/slider/structure.png",
  },
  {
    id: "1",
    image: "/slider/styling.png",
  },
  {
    id: "2",
    image: "/slider/framework.png",
  },
  {
    id: "3",
    image: "/slider/tools.png",
  },
  {
    id: "4",
    image: "/slider/cms.png",
  },
  {
    id: "5",
    image: "/slider/backend.png",
  },
];
