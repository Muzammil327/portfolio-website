import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./social.module.css";

type TypeProps = {
  id: number;
  icon: ReactNode;
  link: string;
};

export default function Social() {
  return (
    <div className={styles.social}>
      <ul className={styles.sociallist}>
        {data.map((data: TypeProps) => {
          return (
            <li key={data.id}>
              <Link
                href={data.link}
                className={styles.sociallink}
                key={data.id}
              >
                {data.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const data: TypeProps[] = [
  {
    id: 0,
    icon: <FaFacebook />,
    link: "/",
  },
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "/",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: "/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "/",
  },
];
