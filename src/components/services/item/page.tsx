import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Service } from "@/types/page";

interface IProps {
  datas: Service;
}

export default function ServiceItem({ datas }: IProps) {
  return (
    <>
      <div className="column text-center py-4 px-4">
        {/* <Link href={`/services/${datas.slug}`}> */}
        <div className="card">
          <div className="icon relative m-auto text-3xl h-20 w-20 rounded-full text-white flex items-center justify-center transition-all">
            <Image
              src={urlForImage(datas.image)}
              height={225}
              width={225}
              alt={datas.title}
              title={datas.title}
              className="rounded-full"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 my-4">
            {datas.title}
          </h3>
          <p className="text-base text-slate-500">{datas.description}</p>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
}
