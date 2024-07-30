"use client"

import styled from "styled-components";
import { Fira_Sans } from "next/font/google";

const SolidCardContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 38.6rem;
  height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 6rem;
  border-radius: 1.2rem;
  overflow: hidden;
  position: relative;

  @media (prefers-color-scheme: dark) {
    color: #000;
  }

  @media (max-width: 991px) {
    max-width: 54rem;
  }

  @media (max-width: 600px) {
    max-width: 38.6rem;
  }

  > h3 {
    font-weight: bold;
    font-size: 2rem;
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
  }

  > .line {
    width: 3px;
    height: 300px;
    background: linear-gradient(180deg, #5e943e 0%, #2a8ecc 100%);
    transform: rotate(-15deg);
    position: absolute;

    &:first-of-type {
      left: 10px;
      bottom: -100px;
    }

    &:last-child {
      top: -20px;
      right: 10px;
      transform: scale(-1) rotate(-15deg);
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

interface SolidCardProps {
  title: string;
  subtitle: string;
}

const SolidCard = ({ title, subtitle }: SolidCardProps) => {
  return (
    <SolidCardContainer>
      <h3>{title}</h3>
      <p className={fira.className}>
        {subtitle}
      </p>

      <div className="line"></div>
      <div className="line"></div>
    </SolidCardContainer>
  );
};

export default SolidCard;
