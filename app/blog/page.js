import blogStyles from "./blog.module.css";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function BlogPage() {
    return (
        <section className={styles.page}>
            <h1>Blog Page</h1>
            <div className={blogStyles.blogList}>
                <Link href="/blog/post-1">Blog post 1</Link>
                <Link href="/blog/post-2">Blog post 2</Link>
            </div>
        </section>
    )
}