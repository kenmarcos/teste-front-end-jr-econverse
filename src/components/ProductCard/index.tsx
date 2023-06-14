import { Product } from "../../types";
import { formatPrice } from "../../utils/formats";
import Button from "../Button";

import styles from "./productCard.module.scss";

type ProductCardProps = Product;

const ProductCard = ({ productName, photo, price }: ProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={photo} alt={productName} />
      </div>

      <div className={styles.description}>
        <h4>{productName}</h4>

        <h3>{formatPrice(price)}</h3>

        <small>Frete grátis</small>
      </div>

      <div className={styles.action}>
        <Button className="primary">COMPRAR</Button>
      </div>
    </div>
  );
};

export default ProductCard;
