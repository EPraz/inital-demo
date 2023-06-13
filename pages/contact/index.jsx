import { MainLayout } from "@/componets/layouts/MainLayout";
import styles from "@/componets/layouts/MainLayout.module.css";
import Link from "next/link";

export default function ContactPage() {
    return (
        <MainLayout>
            <h1 className={"title"}>
                Ir a{" "}
                <Link href="/" style={{ color: "blue" }}>
                    Home
                </Link>
            </h1>
            {/* </div> */}

            <p className={"description"}>
                Get started by editing&nbsp;
                <code className={"code"}>pages/contact.jsx</code>
            </p>
        </MainLayout>

    );
}
