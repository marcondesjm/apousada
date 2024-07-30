"use client"

import styled from "styled-components";

const VisitUsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 0.8rem;
  padding: 10rem;

  @media (max-width: 1440px) {
    justify-content: center;
    gap: 6rem;
  }

  @media (max-width: 425px) {
    padding: 10rem 3rem;
  }

  > h3 {
    display: none;

    @media (max-width: 425px) {
      display: block;
      color: #fff;
      text-shadow: 0px 0px 20px #000;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  > div {
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    gap: 1.2rem;
    height: 57.5rem;

    @media (max-width: 840px) {
      width: min-content;
      height: max-content;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: "C V" "U U";
      justify-items: center;
    }

    @media (max-width: 425px) {
      display: none;
    }

    > div.visitCard {
      position: relative;
      width: 20rem;
      height: 30rem;

      > img {
        object-fit: cover;
        object-position: center;
      }

      > span {
        color: #fff;
        position: absolute;
        text-shadow: 0px 0px 20px #000;
        font-size: 4.8rem;
        font-weight: 700;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }

    > div.visitCard:nth-child(1) {
      grid-area: C;
    }

    > div.visitCard:nth-child(2) {
      align-self: center;
      grid-area: V;
    }

    > div.visitCard:nth-child(3) {
      align-self: end;
      grid-area: U;
    }
  }

  > iframe {
    border: none;
    border-radius: 3rem;
  }
`;

export default VisitUsContainer;
