import Layout from '../../components/layout'
import styles from "../../styles/Home.module.css";

export default function Post({posts}) {
    return (
        <Layout>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <div className={styles.card} key={post.title}>
                        <h3>{post.title}</h3><br/>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

// This function gets called at build time - static generation
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const data = getSortedPostsData();

    return data;
}

// you can have this function pull data from somewhere else and generate the pages
// Static generation works best if there are relatively small number of pages
export async function getSortedPostsData() {
    // Get file names under /posts
    return {
        props: {
            posts: [
                {
                    id: 1,
                    title: "This is title 1",
                    body: "What do you want in body 1."
                },
                {
                    id: 2,
                    title: "This is title 2",
                    body: "What do you want in body 2. The idea is to simply test static generation."
                }
            ]
        }
    }
}
