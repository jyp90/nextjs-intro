import NavBar from "./NavBars"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>Hello</title>
        </Head>
        <NavBar></NavBar>
        
        <div>{children}</div>
        </>
    )
}