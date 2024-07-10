import styles from "./page.module.css";
import SlideShow from "@/components/slideshow/slideshow";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>Highest Quality<br/>Lower Than Market Price</h1>
      <SlideShow/>
      <Button
        label="Explore"
        link="/browse"
        style="primary"
      />
    </section>
  );
}
