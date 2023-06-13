import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from '@/componets/layouts/MainLayout'


export default function PricingPage() {
    return (
        <MainLayout>
            <h1 className={styles.title}>
                Ir a{" "}
                <Link href="/" style={{ color: "blue" }}>
                    Pricing page
                </Link>
            </h1>

            <p className={styles.description}>
                Get started by editing&nbsp;
                <code className={styles.code}>pages/pricing/index.jsx</code>
            </p>
        </MainLayout>
    );
}
