import Head from 'next/head';
import styles from './MainLayout.module.css';
import { NavBar } from '../NavBar';

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />


            <main className={`${styles.main}`}>
                {children}
            </main>
        </div>
    );
}
