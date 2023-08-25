import BrandCarousel from "../../../../components/BrandCarousel";
import styles from "./brands.module.scss";

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
