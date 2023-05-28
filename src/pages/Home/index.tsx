import Banner from "../../assets/img/banner.png";
import Button from "../../components/Button";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <img src={Banner} alt="banner" />
        <div className={styles.gradient}></div>
        <div className={styles.bannerDescription}>
          <h2>Venha conhecer nossas promoções</h2>
          <h3>50% Off nos produtos </h3>
          <Button className="primary">Ver produto</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
