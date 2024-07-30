"use client"

import styled from "styled-components";

interface FooterProps {
  $background?: string;
}

const Footer = styled.footer<FooterProps>`
  min-height: 50vh;
  color: var(--white);
  text-align: center;
  padding: 3.4rem;
  position: relative;
  z-index: 9;

  span {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    font-weight: 700;
  }

  background: ${({ $background }) => $background ?? "transparent"};

  > div {
    max-width: 1200px;
    margin: 0 auto;
    min-height: inherit;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "SM LOGO CU";

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "LOGO LOGO" "SM CU";
    }

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
      justify-items: center;
      grid-template-areas: "SM"  "LOGO" "CU";
      margin-bottom: 2rem;
      gap: 6rem;
    }
  }

  #sm {
    grid-area: SM;
  }

  #ft-logo {
    grid-area: LOGO;
  }

  #cu {
    grid-area: CU;
  }

  #sm, #cu {
    display: flex;
    flex-flow: column nowrap;
    gap: 2.4rem;

    > div {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 320px) {
        gap: 2rem;
      }
    }
  }
`;

export default Footer;
