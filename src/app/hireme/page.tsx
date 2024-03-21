import dynamic from "next/dynamic";
const HireTemplate = dynamic(() => import("@/view/hireme/page"));
import type { Metadata } from "next";

const data = {
  title: "Hire ME || Muzammil Portfolio",
  description:
    "I am a Full Stack Developer With Frontend Backend and Deveops Enginerr with Javascript, Typescript, Phython, PHP, Node JS and SQL.",
  canonical: "/hireme",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://mmuzammil-portfolio.vercel.app/hireme",
  keywords: [
    "mmuzammil-portfolio",
    "muzammil",
    "muzammil Safdar",
    "muzammil Safdar Portfolio",
    "muzammil portfolio",
  ],
};

export default function page() {
  return (
    <>
    <HireTemplate />
    </>
  )
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
