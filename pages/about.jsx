import { MainLayout } from "../componets/layouts/MainLayout";
import styles from "@/componets/layouts/MainLayout.module.css";
import Link from "next/link";
import { DarkLayout } from "../componets/layouts/DarkLayout";
export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>
        Ir a{" "}
        <Link href="/" style={{ color: "blue" }}>
          Home
        </Link>
      </h1>

      <p className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/about.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
