import {
  BoxIcon,
  CreditCardIcon,
  HeartIcon,
  ShieldCheckIcon,
  ShoppinCartIcon,
  TruckIcon,
  UserCircleIcon,
} from "../../icons";
import Logotype from "/public/logotype.svg";

import styles from "./style.module.scss";

const mainHeaderNavigations = [
  { icon: <BoxIcon />, name: "orders" },
  { icon: <HeartIcon />, name: "wishes" },
  { icon: <UserCircleIcon />, name: "account" },
  { icon: <ShoppinCartIcon />, name: "cart" },
];

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

        <section className={styles.mainHeader}>
          <a href="/">
            <img src={Logotype} alt="VTEX logotype" />
          </a>
          <div>
            <input type="text" />
          </div>
          <nav>
            <ul>
              {mainHeaderNavigations.map((navigation) => (
                <li key={navigation.name}>
                  <a href="#">{navigation.icon}</a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <nav className={styles.headerNavbar}></nav>
      </div>
    </header>
  );
};

export default Header;
