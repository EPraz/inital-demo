import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { NavBar } from "../componets/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Page</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={`${styles.main}`}>
        {/* <div className={styles.description}> */}
        <h1 className={styles.title}>
          Ir a{" "}
          <Link href="/" style={{ color: "blue" }}>
            Home
          </Link>
        </h1>
        {/* </div> */}

        <p className={styles.description}>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      </main>
    </>
  );
}
