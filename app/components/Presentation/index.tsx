"use client";

import styled from "styled-components";

const Presentation = styled.div`
  position: relative;
  margin: 0 auto;
  color: white;
  overflow: hidden;
  min-height: 100vh;
  background: linear-gradient(180deg, #47702f 0%, #ffffff 30%);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(180deg, #47702f 0%, #1c2428 30%);
  }

  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-top: calc(90px + 6rem);

    > div {
      &:nth-child(1) {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 10rem;
        max-width: 70rem;
        width: 100%;
        z-index: 2;

        @media (max-width: 840px) {
          gap: 5rem;
        }

        > div {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          gap: 1.2rem;

          @media (max-width: 699.98px) {
            width: 80%;
            flex-flow: column;
          }

          @media (max-width: 375px) {
            width: 95%;
          }

          @media (max-width: 425px) {
            padding: 1rem;

            > button {
              width: 100%;
            }
          }
        }
      }

      &:nth-child(2) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        > article {
          border: 1px solid transparent;
          border-radius: 20px;

          @media (max-width: 320px) {
            width: 30rem;
          }
        }

        > img {
          transform: rotate(-90deg);
          position: absolute;
          left: -30rem;
          bottom: 15rem;
          z-index: -1;
        }
      }

      > h2 {
        font-size: clamp(4.8rem, 5vw, 6.4rem);
        text-shadow: -100px -4px 12px rgba(0, 0, 0, 0.25), #000 1px -1px,
          #000 -1px 1px, #000 1px 1px, #000 -1px -1px;

        @media (max-width: 425px) {
          text-shadow: -30px -4px 12px rgba(0, 0, 0, 0.25), #000 1px -1px,
            #000 -1px 1px, #000 1px 1px, #000 -1px -1px;

          > span {
            margin-left: 2rem;
          }
        }

        > br + span {
          margin-left: 6.5rem;
        }
      }
    }
  }
`;

export default Presentation;
