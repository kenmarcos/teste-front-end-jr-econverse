import Banner from "../../assets/img/banner.png";
import Button from "../../components/Button";
import devices from "../../assets/img/devices.svg";
import market from "../../assets/img/market.svg";
import drinks from "../../assets/img/drinks.svg";
import tools from "../../assets/img/tools.svg";
import care from "../../assets/img/care.svg";
import running from "../../assets/img/running.svg";
import fashion from "../../assets/img/fashion.svg";

import styles from "./home.module.scss";

const navigation = [
  { id: 1, icon: devices, name: "Tecnologia" },
  { id: 2, icon: market, name: "Supermercado" },
  { id: 3, icon: drinks, name: "Bebidas" },
  { id: 4, icon: tools, name: "Ferramentas" },
  { id: 5, icon: care, name: "Saúde" },
  { id: 6, icon: running, name: "Esportes e Fitness" },
  { id: 7, icon: fashion, name: "Moda" },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <img src={Banner} alt="banner" />
        <div className={styles.gradient}></div>
        <div className={styles.bannerDescription}>
          <h2>Venha conhecer nossas promoções</h2>
          <h3>50% Off nos produtos </h3>
          <Button className="primary">Ver produto</Button>
        </div>
      </section>

      <section className={styles.navigation}>
        <nav>
          <ul>
            {navigation.map((nav) => (
              <li key={nav.id}>
                <Button className="secondary">
                  <img src={nav.icon} alt={nav.name} />
                </Button>
                <span>{nav.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Home;
