"use client"

// React Hooks
import { useState } from "react";

// Next
import Image from "next/image";
import { Fira_Sans } from "next/font/google";

// Styled-Components
import styled from "styled-components";
import Button from "../Button";

// Images
import Logo from "../../assets/Logo.png";
import Menu from "../../assets/material-symbols_menu.svg";

// MUI Components
import Drawer from "@mui/material/Drawer";
import { ButtonVariant } from "../GlobalStyles/enums";

const NavbarContainer = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, #071e2d 0%, #1b2615 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding-left: 4vw;

  position: fixed;
  z-index: 10;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  @media (prefers-color-scheme: dark) {
    border-bottom: 2px solid var(--green-600);
  }
  
  @media (min-width: 893px) {
    > div#menu__container {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    > div > button {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  > div {
    > button#Menu {
      margin-left: 2rem;
    }

    @media (max-width: 400px) {
      > button {
        padding: 0.8rem 2rem;
      }
    }
  }

  > ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-align: center;
    margin: 0;

    @media (max-width: 892px) {
      display: none;
    }

    > li {
      color: var(--white);
      font-size: 2rem;
      font-weight: 500;
      height: 100vh;
      max-height: 90px;
      transition: all 0.3s;
      cursor: pointer;

      @media (max-width: 1100px) {
        font-size: 1.7rem;
      }

      @media (max-width: 930px) {
        font-size: 1.5rem;
      }

      &:hover {
        background-color: var(--green-900);

        &:last-child {
          background-color: var(--blue-500-default);
        }

        transition: all 0.3s;
      }

      > a {
        padding: 0 4rem;
        height: 100vh;
        max-height: 90px;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };

  const redirectToLink = () => {
    window.open("https://taiuaambiental.motordereservas.com.br/novareserva");
  };

  return (
    <NavbarContainer className={fira.className}>
      <a href="#">
        <Image
          src={Logo}
          width={50}
          height={66.66}
          alt="Taiuá Ambiental"
          placeholder="blur"
          style={{ borderRadius: "100%" }}
          draggable={false}
        />
      </a>
      <ul>
        <li>
          <a href="#Presentation">Nossa Pousada</a>
        </li>
        <li>
          <a href="#Accommodations">Acomodações</a>
        </li>
        <li>
          <a href="#VisitUs">Nos Visite</a>
        </li>
        <li>
          <a href="#">Eventos</a>
        </li>
        <li>
          <a onClick={redirectToLink}>Reservar</a>
        </li>
      </ul>

      <div id="menu__container">
        <Button
          id="Menu"
          onClick={drawerHandler}
          $variant={ButtonVariant.GREEN}
          $fullWidth
          $fillHeight={{ max: "80px" }}
        >
          <Image src={Menu} width={24} height={24} alt="Menu" />
        </Button>
        <Drawer anchor={"right"} open={isOpen} onClose={drawerHandler}>
          <ul>
            <li>
              <a onClick={drawerHandler} href="#Presentation">
                Nossa Pousada
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#Accommodations">
                Acomodações
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#VisitUs">
                Nos Visite
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#">
                Eventos
              </a>
            </li>
          </ul>
        </Drawer>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
