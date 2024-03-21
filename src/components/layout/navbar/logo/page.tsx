import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          height={172}
          width={250}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </Link>
    </>
  );
}
