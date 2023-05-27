import Econverse from "/econverse.svg";
import Vtex from "/vtex.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.mainFooter}>Footer</section>
      <section className={styles.footerBottom}>
        <div>
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <div>
            <img src={Econverse} alt="econverse logo" />
            <img src={Vtex} alt="vtex logo" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
