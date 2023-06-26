import Slider, { CustomArrowProps } from "react-slick";

import Logotype from "/logotype.svg";
import { NextArrowIcon, PrevArrowIcon } from "../../icons";

import styles from "./brandCarousel.module.scss";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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

const BrandCarousel = () => {
  return (
    <Slider {...sliderSettings}>
      {[...Array(8)].map((_, index) => (
        <div key={index}>
          <a href="#" className={styles.brand}>
            <img src={Logotype} alt="vtex logo" />
          </a>
        </div>
      ))}
    </Slider>
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

export default BrandCarousel;
