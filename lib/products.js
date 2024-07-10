import sql from "better-sqlite3";

const db = sql("products.db");

export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error('Some Error Occured!');
    return db.prepare('SELECT * FROM products').all();
}

export function getProductDetail(slug) {
    return db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
}