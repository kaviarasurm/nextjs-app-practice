import Image from "next/image";
import Button from "../button/button";
import classes from "./productItem.module.css";

export default function ProductItem({ image, title, description, slug }) {
    return (
        <div className={classes["product-item"]}>
            <figure className={classes.image}>
                <Image src={image} alt={title} fill />
            </figure>
            <div className={classes["product-item-details"]}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={classes["product-item-action"]}>
                    <Button
                        label="View Detail"
                        link={`/browse/${slug}`}
                        style="primary"
                    />
                </div>
            </div>
        </div>
    )
}