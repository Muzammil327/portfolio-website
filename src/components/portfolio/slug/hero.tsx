import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
import { urlForImage } from "@/sanity/lib/image";
import { Portfolio } from "@/src/types/page";
import Button from "@/components/elements/Button/page";

interface Iprops {
  datas: Portfolio;
}

export default function PortfolioHero({ datas }: Iprops) {
  return (
    <div className="mb-2">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="lg:py-44 md:py-20 pt-2 md:text-left text-center">
            <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-3xl md:my-8 my-4 font-bold text-black">
              {datas.title}
            </h1>
            <p className="text-base font-normal mb-7 text-slate-500 leading-7">
              {datas.description}
            </p>
            <Button href={datas.livelink} text={"Demo Live"} className={"py-3 px-6"}/>
          
            <div className="mt-6 ">
              <Social />
            </div>
          </div>
          <div className="md:pt-12 pt-4 relative my-auto">
            <Image
              src={urlForImage(datas.image)}
              alt={datas.title}
              title={datas.title}
              height={250}
              width={300}
              className="w-full md:h-[400px] h-72 rounded-lg my-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
