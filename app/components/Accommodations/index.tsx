"use client";

import styled from "styled-components";

const Accommodations = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5rem 3.6rem;
  text-align: center;

  @media (max-width: 375px) {
    padding: 0 2.4rem 3.6rem;
  }

  @media (max-width: 320px) {
    padding: 0 2rem 3.6rem;
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 6rem;
  }

  > h2 {
    margin-top: calc(90px + 5vh);
    margin-bottom: 5vh;
    font-size: clamp(3.4rem, 8vw, 4.8rem);
  }
`;

export default Accommodations;
