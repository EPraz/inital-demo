import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { NavBar } from "../componets/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact - Page</title>
                <meta name="description" content="Contact Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className={`${styles.main}`}>
                <h1 className={styles.title}>
                    Ir a{" "}
                    <Link href="/" style={{ color: "blue" }}>
                        Home
                    </Link>
                </h1>
                {/* </div> */}

                <p className={styles.description}>
                    Get started by editing&nbsp;
                    <code className={styles.code}>pages/contact.jsx</code>
                </p>
            </main>
        </>
    );
}
