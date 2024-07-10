import { Suspense } from "react";
import ProductList from "@/components/products/productList";
import { getProducts } from "@/lib/products";
import styles from "../page.module.css";

async function FetchProducts() {
    const allProducts = await getProducts();

    return <ProductList products={allProducts} />;
}

export default async function BrowsePage() {
    return (
        <section className={styles.page}>
            <h1 className={styles["product-list-title"]}>Your Most Expected Products Here!!!</h1>
            <Suspense fallback={<p className={styles.loading}>Fetching Products, Hang on...</p>}>
                <FetchProducts />
            </Suspense>
        </section>
    )
}