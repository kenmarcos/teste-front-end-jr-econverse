import Slider, { CustomArrowProps } from "react-slick";

import { NextArrowIcon, PrevArrowIcon } from "../../icons";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { Product } from "../../types";

import styles from "./showcase.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
};

interface ShowcaseProps {
  products?: Product[];
  isLoading: boolean;
}

const Showcase = ({ products, isLoading }: ShowcaseProps) => {
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
            {isLoading &&
              [...Array(4)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}

            {products &&
              products.map((product) => (
                <ProductCard key={product.productName} {...product} />
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
