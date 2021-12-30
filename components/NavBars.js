import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBars() {
    const router = useRouter();
    console.log(router);

    return <nav>
        <Link style={{color: "red"}} href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>
          Home
        </a>
            </Link>
        <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>
            About
        </a>
        </Link>
        <style jsx>{`
        nav {
            background-color: tomato;
        }
        a {
            color: orange;
        }
        .active {
            color: white;
        }

        `}</style>
    </nav>;
}