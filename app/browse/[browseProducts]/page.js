import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/button/button";
import { getProductDetail } from '@/lib/products';
import styles from "@/app/page.module.css";

export default function ProductDetailPage({ params }) {
    const product = getProductDetail(params.browseProducts);

    if (!product) {
        notFound();
    }

    product.instructions = product.instructions.replace(/\n/g, '<br>');

    return (
        <section className={styles.page}>
            <Link className={styles.backButton} href="/browse">&lt; Go Back</Link>
            <h1>{product.title}</h1>
            <figure className={styles['image-wrapper']}>
                <Image src={product.image} alt={product.title} fill />
            </figure>
            <article className={styles["product-instructions"]}>
                <p dangerouslySetInnerHTML={{
                    __html: product.instructions
                }}></p>
            </article>
            <Button link="/enquiry" label="Enquiry Now" style="primary"></Button>
        </section>
    )
}
