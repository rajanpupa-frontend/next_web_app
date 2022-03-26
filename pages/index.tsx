import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'


const Home: NextPage = () => {
    return (
        <Layout home>
            {<div className={styles.container}>
                <Head>
                    <title>Mock University</title>
                    <meta name="description" content="The best way to learn anything."/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <h1 className={styles.title}>
                    Read{' '}
                    <Link href="/posts/posts">
                        <a>this page!</a>
                    </Link>
                </h1>
            </div>}
      </Layout>
  )
}

export default Home
