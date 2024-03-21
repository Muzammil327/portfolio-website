import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const HireCard = dynamic(() => import("@/components/hire/card/page"));

export default function HireTemplate() {
  return (
    <>
      <SHero
        head="Hire Me"
        para=""
      />
      <HireCard />
    </>
  );
}
