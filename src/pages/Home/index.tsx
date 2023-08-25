import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Showcase from "./components/Showcase";
import { Product } from "../../types";
import Advertisements from "./components/Advertisements";
import AdCard from "../../components/AdCard";

import styles from "./home.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Brands from "./components/Brands";

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
