import dynamic from "next/dynamic";
import Link from "next/link";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
const Logo = dynamic(() => import("@/components/layout/navbar/logo/page"));
import styles from "./footer.module.css";

const aboutData = {
  description:
    "I am a Javascript developer with expertise in full-stack web development. I have strong understanding of the Javascript framework and its ecosystem. I am passionate about creating efficient, scalable, and user-friendly web applications.",
};

interface TypeProps {
  id: number;
  title: string;
  href: string;
}

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-50 mt-8">
        <Container>
          <div className={styles.section}>
            <div className={`col-span-2 ${styles.C1}`}>
              <Logo />
              <p className="py-6">{aboutData.description}</p>
              <Social />
            </div>
            <div className={`col-span-1 ${styles.C1}`}>
              <h3 className={styles.heading}>Useful Links</h3>
              <ul>
                {data1.map((data: TypeProps) => {
                  return (
                    <li className="mb-3" key={data.id}>
                      <Link href={data.href} key={data.id} className="hover:c1">
                        {data.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={`col-span-2 ${styles.C1}`}>
              <h3 className={styles.heading}>Skills</h3>
              <ul className="grid grid-cols-2 gap-2">
                {data2.map((data: TypeProps) => {
                  return (
                    <li className="mb-3" key={data.id}>
                      <Link href={data.href} key={data.id} className="hover:c1">
                        {data.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>

        <div className={styles.footerarea}>
          <p className={styles.footerareap}>
            Copyright © 2023 | by{" "}
            <Link href="/" target="_blank" className="c1">
              Muzammil Safdar
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

const data1: TypeProps[] = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "About US",
    href: "/about",
  },
  {
    id: 2,
    title: "Contact US",
    href: "/contact",
  },
  {
    id: 3,
    title: "My Skill",
    href: "/skill",
  },
  {
    id: 4,
    title: "My Portfolio",
    href: "/portfolio",
  },
];

const data2: TypeProps[] = [
  {
    id: 0,
    title: "Javascript",
    href: "/",
  },
  {
    id: 1,
    title: "Typescript",
    href: "/",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    href: "/",
  },
  {
    id: 3,
    title: "SCSS",
    href: "/",
  },
  {
    id: 4,
    title: "React JS",
    href: "/",
  },
  {
    id: 5,
    title: "Next JS",
    href: "/",
  },
  {
    id: 6,
    title: "Node JS",
    href: "/",
  },
  {
    id: 7,
    title: "Express JS",
    href: "/",
  },
  {
    id: 8,
    title: "MongoDB",
    href: "/",
  },
  {
    id: 9,
    title: "Axios",
    href: "/",
  },
];

