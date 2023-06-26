import { useState } from "react";

import { Product } from "../../types";
import { formatPrice } from "../../utils/formats";
import Button from "../Button";

import styles from "./productCard.module.scss";
import Modal from "../Modal";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { photo, productName, descriptionShort, price } = product;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div onClick={() => setIsOpen(true)}>
          <div className={styles.image}>
            <img src={photo} alt={productName} />
          </div>

          <div className={styles.description}>
            <h4>{productName}</h4>

            <h3>{formatPrice(price)}</h3>

            <small>Frete grátis</small>
          </div>
        </div>

        <div className={styles.action}>
          <Button className="primary">COMPRAR</Button>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} product={product} />
    </>
  );
};

export default ProductCard;
