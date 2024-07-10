import ProductItem from "./productItem";
import classes from "./productList.module.css";

export default function ProductList({ products }) {
    return (
        <section className={classes["product-list-wrapper"]}>
            <ul className={classes["product-list"]}>
                {products.map((product) => (
                    <li
                        className={classes["product-list-item"]}
                        key={product.id}
                    >
                        <ProductItem {...product} />
                    </li>
                ))}
            </ul>
        </section>
    )
}