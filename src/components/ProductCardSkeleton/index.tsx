import Skeleton from "react-loading-skeleton";

import styles from "./productCardSkeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSkeleton}>
        <Skeleton height={120} width={120} circle />
      </div>

      <Skeleton count={5} />

      <Skeleton height={38} />
    </div>
  );
};

export default ProductCardSkeleton;
