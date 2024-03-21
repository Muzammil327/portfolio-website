"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { Portfolio } from "@/src/types/page";

interface Iprops {
  datas: Portfolio;
}

export default function Portflioleft({ datas }: Iprops) {
  return (
    <div className="section article">
      <PortableText value={datas.body} components={PortableTextComponent} />
    </div>
  );
}

export const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => {
      const { caption } = value;
      return (
        <div className="relative h-full my-3 w-full">
          <Image
            src={urlForImage(value)}
            alt={caption}
            title={caption}
            className="rounded-lg block "
            height={541}
            width={850}
            priority={false}
          />
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return (
        <a href={href} className="text-red-400">
          {children}
        </a>
      );
    },
  },
  link: ({ value, children }: any) => {
    const { blank, href } = value;
    return blank ? (
      <a href={href} target="_blank" rel="noopener" className="text-black">
        {children}
      </a>
    ) : (
      <a href={href} className="text-black">
        {children}
      </a>
    );
  },
};
