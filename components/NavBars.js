import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBars.module.css"

export default function NavBars() {
    const router = useRouter();
    console.log(router);

    return <nav className={styles.nav}>
        <Link style={{color: "red"}} href="/">
            <a style={{ color: router.pathname === '/' ? 'red' : 'blue'}}>Home</a>
            </Link>
        <Link href="/about"><a>About</a></Link>
    </nav>;
}