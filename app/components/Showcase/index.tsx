"use client"

import styled from "styled-components";

interface IShowcaseProps {
  $filter: string;
}

const Showcase = styled.div<IShowcaseProps>`
  position: relative;
  color: white;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  > div:not(#fade) {
    display: flex;
    flex-flow: column nowrap;
    gap: 10rem;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    filter: brightness(0.65);

    @media (max-width: 840px) {
      gap: 5rem;
    }

    > div {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 1.2rem;

      @media (max-width: 425px) {
        > button {
          width: 100%;
        }
      }
    }
  }

  h1 {
    text-align: center;

    a > img {
      position: relative;
      max-width: 37rem;
      width: auto;
      height: auto;
      z-index: 3;

      @media (max-width: 840px) {
        width: 70%;
        height: fit-content;
      }
    }
  }

  > span {
    text-align: center;
    font-size: clamp(2.8rem, 4vw, 3.2rem);
    font-weight: 700;
    z-index: 9;
  }

  > a {
    z-index: 9;
  }

  #fade {
    width: 100%;
    height: 15vh;
    background: linear-gradient(180deg, transparent 0%, #47702f 80%);
    position: absolute;
    bottom: -1%;
    z-index: 9999;
  }

  @keyframes move {
    100% {
      transform: scale(0);
    }
  }
`;

export default Showcase;
