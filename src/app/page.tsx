import React from "react";
import HomeTemplate from "@/view/home/page";
import type { Metadata } from "next";

const data = {
  title: "Muzammil Portfolio || Full Stack Developer",
  description:
    "I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.",
  canonical: "/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://mmuzammil-portfolio.vercel.app/",
  keywords: [
    "mmuzammil-portfolio",
    "muzammil",
    "muzammil Safdar",
    "muzammil Safdar Portfolio",
    "muzammil portfolio",
  ],
};
export default function Home() {
  return (
    <>
    <HomeTemplate />
    </>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
};
