import styles from "./brands.module.scss";

import BrandCarousel from "@/components/BrandCarousel";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <div>
        <h4>Navegue por marcas</h4>

        <BrandCarousel />
      </div>
    </section>
  );
};

export default Brands;
