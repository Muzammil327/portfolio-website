import Link from "next/link";
import dynamic from "next/dynamic";
import { PortfolioH } from "../portfolio/page";
import { ServivceHAll } from "../services/page";
import HSkill from "@/src/components/skill/home/page";
const MHero = dynamic(() => import("@/components/MHero/page"));

export default function HomeTemplate() {
  return (
    <>
      <MHero />
      <ServivceHAll />
      <div className="flex items-center justify-center my-5">
        <Link href="/services" className="btn btn2">
          See All Services
        </Link>{" "}
      </div>

      <HSkill />

      <PortfolioH />
      <div className="flex items-center justify-center my-5">
        <Link href="/portfolio" className="btn btn2">
          See All Projects
        </Link>
      </div>

    
    </>
  );
}
