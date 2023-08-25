import styles from "./footer.module.scss";

import Button from "../Button";
import Input from "../Input";

import PaymentMethods from "@/assets/img/payment-methods.svg";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icons";
import Econverse from "/econverse.svg";
import Vtex from "/vtex.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.mainFooter}>
        <div>
          <div className={styles.information}>
            <section className={styles.about}>
              <h5>Sobre nós</h5>

              <ul>
                <li>
                  <a href="#">Conheça</a>
                </li>
                <li>
                  <a href="#">Como comprar</a>
                </li>
                <li>
                  <a href="#">Indicação e desconto</a>
                </li>
              </ul>

              <div>
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
              </div>
            </section>

            <section className={styles.info}>
              <h5>Informações úteis</h5>

              <ul>
                <li>
                  <a href="#">Fale conosco</a>
                </li>
                <li>
                  <a href="#">Dúvidas</a>
                </li>
                <li>
                  <a href="#">Prazos de entrega</a>
                </li>
                <li>
                  <a href="#">Formas de pagamento</a>
                </li>
                <li>
                  <a href="#">Política de privacidade</a>
                </li>
                <li>
                  <a href="#">Trocas e devoluções</a>
                </li>
              </ul>
            </section>

            <section className={styles.payment}>
              <h5>Formas de pagamento</h5>

              <img src={PaymentMethods} alt="payment methods" />
            </section>
          </div>

          <div className={styles.contact}>
            <section className={styles.contactBox}>
              <div>
                <h3>
                  <span>Cadastre-se e receba nossas</span> novidades e promoções
                </h3>
                <p>
                  Excepteur sint occaecat cudatat non ent, sunt in culpa qui
                  officia lorem ipsum
                </p>
                <div>
                  <Input placeholder="SEU E-MAIL" />
                  <Button className="primary">Ok</Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

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
