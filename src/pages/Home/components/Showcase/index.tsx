import Slider, { CustomArrowProps } from "react-slick";

import styles from "./showcase.module.scss";

import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { NextArrowIcon, PrevArrowIcon } from "@/icons";
import { api } from "@/services/axiosInstance";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

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
        infinite: false,
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 425,
      settings: {
        infinite: false,
        slidesToShow: 1.5,
      },
    },
  ],
};

interface Products {
  success: string;
  products: Product[];
}

const getProducts = async () => {
  const response = await api.get<Products>(
    "/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  return response.data.products;
};

const Showcase = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

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

        <Slider {...sliderSettings}>
          {isLoading &&
            [...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}

          {data &&
            data.map((product) => (
              <ProductCard key={product.productName} product={product} />
            ))}
        </Slider>
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
