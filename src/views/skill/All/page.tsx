import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const SkillCardList = dynamic(
  () => import("@/components/skill/skill/list/page")
);

export default function SkillAll() {
  return (
    <>
      <SHero head="My Skills" para="" />
      <SkillCardList />
    </>
  );
}
