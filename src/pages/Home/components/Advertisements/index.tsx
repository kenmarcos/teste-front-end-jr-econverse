import { ReactNode } from "react";

import styles from "./advertisements.module.scss";

interface AdvertisementsProps {
  children: ReactNode;
}

const Advertisements = ({ children }: AdvertisementsProps) => {
  return <section className={styles.container}>{children}</section>;
};

export default Advertisements;
