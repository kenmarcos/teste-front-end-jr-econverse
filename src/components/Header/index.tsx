import {
  BoxIcon,
  CreditCardIcon,
  HeartIcon,
  ShieldCheckIcon,
  ShoppinCartIcon,
  TruckIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  CrownIcon,
} from "../../icons";
import Input from "../Input";
import Button from "../Button";
import Logotype from "/logotype.svg";

import styles from "./header.module.scss";

const mainHeaderNavigations = [
  { icon: <BoxIcon />, name: "orders" },
  { icon: <HeartIcon />, name: "wishes" },
  { icon: <UserCircleIcon />, name: "account" },
  { icon: <ShoppinCartIcon />, name: "cart" },
];

const headerNavbarNavigations = [
  { text: "Todas as categorias" },
  { text: "Supermercado" },
  { text: "Livros" },
  { text: "Moda" },
  { text: "Lançamentos" },
  { text: "Ofertas do dia" },
  { icon: <CrownIcon />, text: "Assinatura" },
];

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
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
            <Input
              placeholder="O que você está buscando?"
              adorment={
                <Button>
                  <MagnifyingGlassIcon />
                </Button>
              }
            />
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

        <nav className={styles.headerNavbar}>
          <ul>
            {headerNavbarNavigations.map((navigation) => (
              <li key={navigation.text}>
                <a>
                  {navigation?.icon}
                  {navigation.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
