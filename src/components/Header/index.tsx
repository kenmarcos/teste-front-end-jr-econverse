import styles from "./header.module.scss";

import Button from "../Button";
import Input from "../Input";

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
} from "@/icons";
import Logotype from "/logotype.svg";

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
  { id: 1, icon: <BoxIcon />, name: "orders" },
  { id: 2, icon: <HeartIcon />, name: "wishes" },
  { id: 3, icon: <UserCircleIcon />, name: "account" },
  { id: 4, icon: <ShoppinCartIcon />, name: "cart" },
];

const headerNavbarNavigations = [
  { id: 1, text: "Todas as categorias" },
  { id: 2, text: "Supermercado" },
  { id: 3, text: "Livros" },
  { id: 4, text: "Moda" },
  { id: 5, text: "Lançamentos" },
  { id: 6, text: "Ofertas do dia" },
  { id: 7, icon: <CrownIcon />, text: "Assinatura" },
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
                <li key={navigation.id}>
                  <a href="#">{navigation.icon}</a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <nav className={styles.headerNavbar}>
          <ul>
            {headerNavbarNavigations.map((navigation) => (
              <li key={navigation.id}>
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
