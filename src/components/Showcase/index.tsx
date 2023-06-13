import Slider, { CustomArrowProps } from "react-slick";

import { NextArrowIcon, PrevArrowIcon } from "../../icons";

import styles from "./showcase.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: string;
}

interface ShowcaseProps {
  products?: Product[];
}

const Showcase = ({ products }: ShowcaseProps) => {
  return (
    <section className={styles.container}>
      <div>
        <header className={styles.header}>
          <div>
            <hr />
            <h4>Produtos relacionados</h4>
            <hr />
          </div>

          <div>
            <a href="#">Ver Todos</a>
          </div>
        </header>

        <div className={styles.carousel}>
          <Slider {...sliderSettings}>
            {products?.map((product) => (
              <div key={product.productName}>
                <img src={product.photo} alt={product.productName} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <NextArrowIcon />
    </div>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <PrevArrowIcon />
    </div>
  );
}

export default Showcase;
