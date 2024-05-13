import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5 py-2">
        <span className="text-red-500 text-3xl font-semibold">Muzammil.</span>
      </Link>
    </>
  );
}
