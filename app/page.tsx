"use client";

// Next
import Head from "next/head";
import Image from "next/image";
import { Josefin_Sans, Fira_Sans } from "next/font/google";
import { useEffect } from "react";

// Images
import Logo from "./assets/Logo.png";
import ArrowDown from "./assets/arrowDown.svg";
import Chapada1 from "./assets/chapada1.png";
import Chapada2 from "./assets/chapada2.png";
import Chapada3 from "./assets/chapada3.png";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Youtube from "./assets/youtube.svg";
import Email from "./assets/email.svg";
import WhatsApp from "./assets/whatsapp.svg";
import Phone from "./assets/phone.svg";
import Key from "./assets/key.svg";
import Cottage from "./assets/cottage.svg";
import WhatsAppOutline from "./assets/whatsapp_outline.svg";
import TaiuaVerde from "./assets/taiua_verde.png";
import TaiuaAzul from "./assets/taiua_azul.png";

// Components & Styled-Components
import HomeContainer from "./components/HomeContainer";
import GlobalStyle from "./components/GlobalStyles";
import Container from "./components/Container";
import Showcase from "./components/Showcase";
import Presentation from "./components/Presentation";
import Button from "./components/Button";
import Accommodations from "./components/Accommodations";
import RoomCards from "./components/RoomCard";
import VirtuesContainer from "./components/VirtuesContainer";
import Experiences from "./components/Experiencies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VisitUsContainer from "./components/VisitUsContainer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import ShowcaseImages from "./components/ShowcaseImages";
import TaiuaTimeline from "./components/Timeline";

// Enum
import { ButtonVariant } from "./components/GlobalStyles/enums";

// Utils
import { CallWppMessage, redirectToLink } from "./utils";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <main>
      <HomeContainer className={josefin.className}>
        <GlobalStyle />
        <WhatsAppBtn onClickFn={CallWppMessage} />
        <Navbar />
        <Container
          $boxShadow="0px 4px 80px 500px rgba(0, 0, 0, 0.40) inset;"
          $background="linear-gradient(90deg, #071e2d 0%, #1b2615 100%)"
          $zIndex="9"
        >
          <Showcase $filter="">
            <h1>
              <a href="#" draggable={false}>
                <Image
                  src={Logo}
                  width={600}
                  height={800}
                  alt="Taiuá Ambiental"
                  priority
                  style={{ borderRadius: "100%" }}
                  draggable={false}
                />
              </a>
            </h1>
            <span>
              Um lugar incrível para <br /> momentos especiais
            </span>
            <a href="#">
              <Image src={ArrowDown} width={36} alt="Ver mais" />
            </a>

            <ShowcaseImages />
            <div id="fade"></div>
          </Showcase>
        </Container>
        <Container id="Presentation" $minHeight="80vh">
          <Presentation>
            <div>
              <div>
                <h2>
                  <span>A NOSSA</span>
                  <br />
                  <span>POUSADA</span>
                </h2>

                <div>
                  <Button
                    $variant={ButtonVariant.BLUE}
                    className={fira.className}
                    onClick={() => redirectToLink()}
                  >
                    <Image src={Key} alt="Ícone Chave" />
                    Reservar
                  </Button>
                  <Button
                    $variant={ButtonVariant.GREEN}
                    className={fira.className}
                    onClick={CallWppMessage}
                  >
                    <Image src={WhatsAppOutline} alt="Ícone WhatsApp" />
                    Fale Conosco
                  </Button>
                  <Button
                    $variant={ButtonVariant.BLUE}
                    className={fira.className}
                    as="a"
                    href="#Accommodations"
                  >
                    <Image src={Cottage} alt="Ícone Chalé" />
                    Ver Quartos
                  </Button>
                </div>
              </div>

              <TaiuaTimeline />
            </div>
          </Presentation>
        </Container>
        <Container
          id="Accommodations"
          $background="#FFFFFF"
          $darkMode={{ $background: "#1c2428" }}
        >
          <Accommodations>
            <h2>Acomodações</h2>
            <div>
              <RoomCards />
            </div>
          </Accommodations>
        </Container>
        <Container
          id="Attributes"
          $background="linear-gradient(180deg, #FFFFFF 0%, #cce6f5 100%)"
          $darkMode={{
            $background: "linear-gradient(180deg, #1c2428 0%, #448ab9 100%)",
          }}
          style={{ minHeight: "fit-content" }}
        >
          <Experiences />
        </Container>
        <Container
          id="Virtues"
          $background="linear-gradient(180deg, #cce6f5 0%, #4da5dd 100%)"
          $darkMode={{
            $background: "linear-gradient(180deg, #448ab9 0%, #4da5dd 100%)",
          }}
          style={{ minHeight: "fit-content" }}
        >
          <VirtuesContainer>
            <Image src={TaiuaVerde} placeholder="blur" alt="Taiuá Ambiental" />

            <div>
              <div>
                <h3>Missão</h3>
                <p>
                  Proporcionar uma experiência única e sustentável, unindo os
                  visitantes à natureza e promovendo a consciência ambiental.
                </p>
              </div>
              <hr />
              <div>
                <h3>Visão</h3>
                <p>
                  Criar um espaço onde a experiência única e
                  sustentável que oferece não apenas um visitante à natureza,
                  mas também inspira a se tornarem defensores ativos da
                  consciência ambiental.
                </p>
              </div>
              <hr />
              <div>
                <h3>Valores</h3>
                <p>
                  Nosso compromisso é criar um ambiente acolhedor, onde cada
                  hóspede se sinta parte de uma comunidade que valoriza a
                  natureza e a arte.
                </p>
              </div>
            </div>
            <Image src={TaiuaAzul} placeholder="blur" alt="Taiuá Ambiental" />
          </VirtuesContainer>
        </Container>
        <Container
          id="VisitUs"
          $background="linear-gradient(180deg, #4da5dd 0%, #226fa0 100%)"
          style={{ minHeight: "fit-content" }}
        >
          <VisitUsContainer>
            <h3>VENHA NOS VISITAR</h3>
            <div>
              <div className="visitCard">
                <Image
                  src={Chapada1}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>VENHA</span>
              </div>
              <div className="visitCard">
                <Image
                  src={Chapada2}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>NOS</span>
              </div>
              <div className="visitCard">
                <Image
                  src={Chapada3}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>VISITAR</span>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.300491572392!2d-47.81536818883117!3d-14.177170185161685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93450a6606142523%3A0x43db8181b1ed9b2b!2sPousada%20Taiu%C3%A1%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1691856899258!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </VisitUsContainer>
        </Container>
      </HomeContainer>
      <Footer
        className={josefin.className}
        $background="linear-gradient(180deg, #226fa0 0%, #000 100%)"
      >
        <div>
          <div id="sm">
            <span>REDES SOCIAIS</span>
            <div>
              <a href="" target="_blank">
                <Image
                  width={30}
                  height={30}
                  src={Facebook}
                  alt="Ícone Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/taiuaambiental/"
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  src={Instagram}
                  alt="Ícone Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/@TaiuachapadadosVeadeiros"
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  src={Youtube}
                  alt="Ícone Youtube"
                />
              </a>
            </div>
          </div>

          <Image
            id="ft-logo"
            src={Logo}
            width={200}
            height={267}
            alt="Taiuá Ambiental"
            placeholder="blur"
            style={{ borderRadius: "100%" }}
            draggable={false}
          />
          <div id="cu">
            <span>FALE CONOSCO</span>
            <div>
              <a href="mailto:" target="_blank">
                <Image width={31} height={24} src={Email} alt="Ícone Email" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5562999818977&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <Image
                  width={29}
                  height={30}
                  src={WhatsApp}
                  alt="Ícone WhatsApp"
                />
              </a>
              <div>
                <Image
                  width={29}
                  height={29}
                  src={Phone}
                  alt="Ícone Telefone"
                />
              </div>
            </div>
          </div>
        </div>

        <span>Copyright © 2024 Taiuá Ambiental</span>
      </Footer>
    </main>
  );
}
