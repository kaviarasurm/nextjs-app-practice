const sql = require("better-sqlite3");
const db = sql("products.db");

const dummyProducts = [
    {
        title: "Chicken Boneless",
        slug: "chicken-boneless",
        image: "/images/chicken.jpg",
        description: "Delicious Chicken Boneless with affordable price",
        instructions: `<ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
        <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
        </ul>`
    },
    {
        title: "Sardin Fish",
        slug: "sardin-fish",
        image: "/images/fish.jpg",
        description: "Fresh water Sardin fish at your doorstep",
        instructions: `<ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
        <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
        </ul>`
    },
    {
        title: "Mutton Ribs",
        slug: "mutton-ribs",
        image: "/images/mutton.jpg",
        description: "Mutton made from pure Goat",
        instructions: `<ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
        <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
        </ul>`
    },
    {
        title: "Country Chicken Eggs",
        slug: "country-chicken-eggs",
        image: "/images/egg.jpg",
        description: "Pure country chicked eggs",
        instructions: `<ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
        <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
        </ul>`
    }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       instructions TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO products VALUES (
         null,
         @slug,
         @title,
         @image,
         @description,
         @instructions
      )
   `);

  for (const product of dummyProducts) {
    stmt.run(product);
  }
}

initData();
