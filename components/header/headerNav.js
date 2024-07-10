"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import headerStyles from "./header.module.css";
import logo from "@/assets/freshcuts-logo.svg";

export default function HeaderNav() {
    const pathname = usePathname();

    const linkClasses = (path) => (
        pathname === path ? `${headerStyles.link} ${headerStyles['is-active']}` : headerStyles.link
    );

    return (
        <nav className={headerStyles.header}>
            <ul className={headerStyles.list}>
                <li>
                    <Link href="/">
                        <Image
                            className={headerStyles.logo}
                            src={logo}
                            alt="Learn Corses online"
                            width={200}
                            height={44}
                            priority
                        />
                    </Link>
                </li>
                <li>
                    <Link className={linkClasses('/browse')} href="/browse">Browse</Link>
                </li>
                <li>
                    <Link className={linkClasses('/about')} href="/about">About</Link>
                </li>
                <li>
                    <Link className={linkClasses('/blog')} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={linkClasses('/enquiry')} href={{
                        pathname: '/enquiry',
                        query: { name: 'test', email: 'test@email.com' },
                    }}>Enquiry</Link>
                </li>
            </ul>
        </nav>
    )
}
