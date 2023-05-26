import { CreditCardIcon, ShieldCheckIcon, TruckIcon } from "../../icons";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <section className={styles.headerTop}>
          <ul>
            <li>
              <ShieldCheckIcon />
              <p>
                Compra <span>100% segura</span>
              </p>
            </li>
            <li>
              <TruckIcon />
              <p>
                <span>Frete grátis</span> acima de R$ 200
              </p>
            </li>
            <li>
              <CreditCardIcon />
              <p>
                <span>Parcele</span> suas compras
              </p>
            </li>
          </ul>
          <div></div>
          <div></div>
        </section>
        <section className={styles.mainHeader}>Header</section>
        <nav className={styles.headerNavbar}>Navbar</nav>
      </div>
    </header>
  );
};

export default Header;
