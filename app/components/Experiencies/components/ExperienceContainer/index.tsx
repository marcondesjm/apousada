"use client"

import styled from "styled-components";

const ExperienceContainer = styled.div`
  width: 100%;
  min-height: inherit;
  padding: 6.5rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: 425px) {
    padding: 6.5rem 2rem;
  }

  > h2 {
    font-size: clamp(3.5rem, 6.5vw, 4.8rem);
    text-align: center;
  }

  > div {
    max-width: 1200px;
    margin-top: 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;

    > article > div > div > button,
    > article > div > button {
      padding-top: 6px;
      padding-bottom: 6px;
      border: none;
      font-weight: 500;

      @media (max-width: 600px) {
        padding-top: 8px;
        padding-bottom: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    > article {
      &:nth-child(3n-2) {
        background-color: #254611;
        > div > div > button {
          background-color: var(--green-600);
          border-color: transparent;
        }
      }

      &:nth-child(3n-1) {
        background-color: #143346;
        > div > div > button {
          background-color: var(--blue-500-default);
        }

        > div > button {
          background-color: var(--green-600);
        }
      }

      &:nth-child(3n) {
        background-color: white;

        > div {
          color: black;
        }
      }
    }
  }
`;

export default ExperienceContainer;
