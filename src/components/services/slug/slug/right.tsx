import dynamic from "next/dynamic";
const Social = dynamic(() => import("@/components/elements/Social/page"));
import { Type } from "@/src/types/page";

interface Iprops {
  datas: Type;
}

export default function PortfolioRight({ datas }: Iprops) {
  return (
    <div>
      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Date
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.date}</span>
      </div>

      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Services
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.tag}</span>
      </div>

      <div className="flex flex-col mb-4">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Share on:
        </span>
        <span>
          <Social />
        </span>
      </div>

      {/* <div>
        <span className="mt-3 text-[22px] font-semibold text-black leading-7">
          Skills:
        </span>
        {datas?.skill?.map((data: Skill) => (
          <div key={data._id}>
            <div className="bg py-3 w-full text-white my-3 rounded-md font-semibold flex justify-between px-4 items-center">
              <span>{data.title}</span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
