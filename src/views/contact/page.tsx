import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));

export default function ContactTemplate() {
  return (
    <>
      <SHero
        head="Contact Us"
        para=""
      />
    </>
  );
}
