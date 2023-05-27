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

const informations = [
  {
    id: 1,
    icon: <ShieldCheckIcon />,
    text: (
      <>
        Compra <span>100% segura</span>
      </>
    ),
  },
  {
    id: 2,
    icon: <TruckIcon />,
    text: (
      <>
        <span>Frete grátis</span> acima de R$ 200
      </>
    ),
  },
  {
    id: 3,
    icon: <CreditCardIcon />,
    text: (
      <>
        <span>Parcele</span> suas compras
      </>
    ),
  },
];

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
            {informations.map((info) => (
              <li key={info.id}>
                {info.icon}
                <p>{info.text}</p>
              </li>
            ))}
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
              className="search"
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
