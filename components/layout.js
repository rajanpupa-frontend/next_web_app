import styles from './layout.module.css'
import Link from "next/link";

import Header from "./header";
import Footer from "./footer";


export const siteTitle = 'MockUniversity'

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Header home/>
            <main className={styles.main}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <Footer/>
        </div>
    )
}
