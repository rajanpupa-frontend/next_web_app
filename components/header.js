import Head from "next/head";
import {siteTitle} from "./layout";
import styles from "./header.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react"

const name = 'Rajan'

export default function Header({home}) {
    const {data: session, status} = useSession();
    // not authenticated html
    var authHtml = (<button onClick={() => signIn()}>Sign in with Github</button>)
    // if authenticated
    if (session) {
        authHtml = (
            <>
                 {session.user?.email} &nbsp;&nbsp;
                <button onClick={() => signOut()}> Sign out </button>
            </>
        )
    }

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
                <div className={styles.grid}>
                        {authHtml}
                </div>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
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
                )}
            </header>
        </>
    )
}
