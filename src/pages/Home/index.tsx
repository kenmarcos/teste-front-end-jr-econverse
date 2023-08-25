import styles from "./home.module.scss";

import Advertisements from "./components/Advertisements";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";

import AdCard from "@/components/AdCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />

      <Navigation />

      <Showcase />

      <Advertisements>
        <AdCard title="Produtos" />
        <AdCard title="Produtos" />
      </Advertisements>

      <Showcase />

      <Advertisements>
        <AdCard title="Parceiros" />
        <AdCard title="Parceiros" />
      </Advertisements>

      <Brands />

      <Showcase />
    </div>
  );
};

export default Home;
