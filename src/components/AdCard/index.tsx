import StoreImage from "../../assets/img/store.png";
import Button from "../Button";

import styles from "./adCard.module.scss";

interface AdCardProps {
  title: string;
}

const AdCard = ({ title }: AdCardProps) => {
  return (
    <div className={styles.container}>
      <img src={StoreImage} alt="store image" />

      <div className={styles.overlay} />

      <div className={styles.info}>
        <h3>{title}</h3>

        <span>Lorem ipsum dolor sit amet, consectetur</span>

        <Button className="primary">Confira</Button>
      </div>
    </div>
  );
};

export default AdCard;
