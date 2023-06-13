import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from '../componets/layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Ir a{" "}
        <Link href="/about" style={{ color: "blue" }}>
          About page
        </Link>
      </h1>

      <p className={styles.description}>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
