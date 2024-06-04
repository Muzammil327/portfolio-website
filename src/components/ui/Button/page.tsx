import Link from "next/link";
import styles from "./button.module.css";

interface Button {
  href: string;
  text: string;
  className: string;
}
export default function Button({ href, text, className }: Button) {
  return (
    <Link href={href} className={`${className} ${styles.button}`}>
      {text}
    </Link>
  );
}
