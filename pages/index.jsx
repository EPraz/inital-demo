import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { NavBar } from "@/componets/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />


      <main className={`${styles.main}`}>
        {/* <div className={styles.description}> */}
        <h1 className={styles.title}>
          Ir a{" "}
          <Link href="/about" style={{ color: "blue" }}>
            About page
          </Link>
        </h1>
        {/* </div> */}

        <p className={styles.description}>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </>
  );
}
