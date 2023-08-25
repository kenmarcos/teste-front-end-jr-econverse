import styles from "./banner.module.scss";

import BannerImage from "@/assets/img/banner.png";
import Button from "@/components/Button";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img src={BannerImage} alt="banner" />
      <div className={styles.gradient}></div>
      <div className={styles.bannerDescription}>
        <h2>Venha conhecer nossas promoções</h2>
        <h3>50% Off nos produtos </h3>
        <Button className="primary">Ver produto</Button>
      </div>
    </section>
  );
};

export default Banner;
