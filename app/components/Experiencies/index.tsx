"use client"

import AttributeCards from "./components/AttributeCard";
import ExperienceContainer from "./components/ExperienceContainer";

const Experiences = () => {
  return (
    <ExperienceContainer>
      <h2>Experiências Oferecidas</h2>

      <div>
        <AttributeCards />
      </div>
    </ExperienceContainer>
  );
};

export default Experiences;
