import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBars.module.css"

export default function NavBars() {
    const router = useRouter();
    console.log(router);

    return <nav className={styles.nav}>
        <Link style={{color: "red"}} href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
            </Link>
        <Link href="/about">
        <a className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
            About
        </a>
        </Link>
    </nav>;
}