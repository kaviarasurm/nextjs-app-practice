import styles from "@/app/page.module.css";
import Link from "next/link";

export default function BlogDetailPage({ params }) {
    return (
        <section className={styles.page}>
            <Link className={styles.backButton} href="/blog">&lt; Go Back</Link>
            <h1>Blog Detail Page</h1>
            <p>{params.blogPosts}</p>
        </section>
    )
}