import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const Resume = dynamic(() => import("@/components/about/resume/page"));

export default function AboutTemplate() {
  return (
    <>
      <SHero
        head="About Us"
        para=""
      />
      <Resume />
    </>
  );
}
