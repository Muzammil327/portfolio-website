import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const Heading = dynamic(() => import("@/components/elements/Heading/page"));
import {
  PortfolioList,
  PortfolioHList,
} from "@/components/portfolio/List/page";
import { getProjects } from "@/sanity/schemaTypes/portflio/util";

export async function PortfolioAll() {
  const project = await getProjects();
  return (
    <>
      <SHero
        head="My Portfolio"
        para=""
      />
      <PortfolioList datas={project} />
    </>
  );
}

export async function PortfolioH() {
  const project = await getProjects();
  return (
    <>
      <Heading head="View All Projects" subhead="My Portfolio" />
      <PortfolioHList datas={project} />
    </>
  );
}
