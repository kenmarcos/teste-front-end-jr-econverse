import styles from "./navigation.module.scss";
import devices from "../../../../assets/img/devices.svg";
import market from "../../../../assets/img/market.svg";
import drinks from "../../../../assets/img/drinks.svg";
import tools from "../../../../assets/img/tools.svg";
import care from "../../../../assets/img/care.svg";
import running from "../../../../assets/img/running.svg";
import fashion from "../../../../assets/img/fashion.svg";
import Button from "../../../../components/Button";

const navigation = [
  { id: 1, icon: devices, name: "Tecnologia" },
  { id: 2, icon: market, name: "Supermercado" },
  { id: 3, icon: drinks, name: "Bebidas" },
  { id: 4, icon: tools, name: "Ferramentas" },
  { id: 5, icon: care, name: "Saúde" },
  { id: 6, icon: running, name: "Esportes e Fitness" },
  { id: 7, icon: fashion, name: "Moda" },
];

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
