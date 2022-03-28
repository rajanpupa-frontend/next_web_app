import Head from "next/head";
import {siteTitle} from "../../components/layout";
import styles from "../../components/header.module.css";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = 'Rajan';

export default function Me(){
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Use MockUniversity to ease your learning"
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            </header>
        </>
    );
}
