import Link from "next/link";
import buttonStyles from "./button.module.css";

export default function Button({ label, link, style }) {
    return (
        <Link
            href={link}
            className={buttonStyles[style]}
        >
            {label}
        </Link>
    )
}