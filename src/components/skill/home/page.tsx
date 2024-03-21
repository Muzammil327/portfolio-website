import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));

interface data {
  id: number;
  image: string;
}
export default function HSkill() {
  return (
    <section className="section-img-background py-4 ">
      <Container>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <div className="left col-span-2 md:mt-12 mt-0">
            <h2 className="text-white mb-8 lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:font-bold font-semibold">
              We Can Make Your Business Grow
            </h2>
            <Link href="/skill" className="btn btn2">
              See All Skills
            </Link>
            <div className="mt-8">
              <Social />
            </div>
          </div>
          <div className="right col-span-3">
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-4 md:gap-5 gap-2">
              {skill.map((data: data) => (
                <>
                  <div className="skill flex items-center justify-center" key={data.id}>
                    <Image
                      src={data.image}
                      className="image rounded-full md:h-40 sm:h-32 h-24 md:w-40 sm:w-32 w-24"
                      alt=""
                      title=""
                      height="300"
                      width="300"
                      loading="lazy"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const skill: data[] = [
  {
    id: 0,
    image: "/skill/js.jpg",
  },
  {
    id: 1,
    image: "/skill/ts.png",
  },
  // {
  //   id: 2,
  //   image: "/skill/apollographql.png",
  // },
  {
    id: 2,
    image: "/skill/tailwindcss.png",
  },
  {
    id: 3,
    image: "/skill/react.png",
  },
  {
    id: 4,
    image: "/skill/nextjs.png",
  },
  {
    id: 5,
    image: "/skill/nodejs.png",
  },
  {
    id: 6,
    image: "/skill/expressjs.png",
  },
  {
    id: 7,
    image: "/skill/mongodb.png",
  },
];
