import dynamic from "next/dynamic";
const PortfolioHero = dynamic(() => import("@/components/portfolio/slug/hero"));
const Portflioleft = dynamic(() => import("@/components/portfolio/slug/left"));
const PortfolioRight = dynamic(
  () => import("@/components/portfolio/slug/right")
);
const Container = dynamic(() => import("@/components/elements/container/page"));
import { getProject } from "@/sanity/schemaTypes/portflio/util";

type Iprops = {
  params: { slug: string };
};

export default async function PortfolioSlug({ params }: Iprops) {
  const project = await getProject(params.slug);
  return (
    <Container>
      <PortfolioHero datas={project} />
      <div className="grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="md:col-span-5 col-span-2">
          <Portflioleft datas={project} />
        </div>
        <div className="md:col-span-2 col-span-1">
          <PortfolioRight datas={project} />
        </div>
      </div>
    </Container>
  );
}

export async function generateMetadata({ params }: Iprops) {
  const project = await getProject(params.slug);

  return {
    title: project.title,
    description: project.description,
    keywords: project.skill,
    alternates: {
      canonical: `portfolio/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `portfolio/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: project.title,
      description: project.description,
      images: {
        url: project.image,
        alt: project.title,
      },
    },
  };
}
