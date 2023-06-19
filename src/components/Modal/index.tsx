import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import Button from "../Button";
import { Product } from "../../types";
import { formatPrice } from "../../utils/formats";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}

const Modal = ({ isOpen, setIsOpen, product }: ModalProps) => {
  const { photo, productName, descriptionShort, price } = product;

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <Button onClick={() => setIsOpen(false)}>X</Button>

            <div className={styles.content}>
              <figure>
                <img src={photo} alt={productName} />
              </figure>

              <div>
                <h3>{productName}</h3>

                <h4>{formatPrice(price)}</h4>

                <p>{descriptionShort}</p>

                <a href="#">Veja mais detalhes do produto</a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
