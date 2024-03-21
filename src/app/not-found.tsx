import React from "react";
import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));

export default function NotFound() {
  return (
    <>
      <SHero head="Not Found" para="" />
    </>
  );
}
