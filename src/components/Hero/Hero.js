import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae
        delectus voluptatem eum iste at, maxime autem quibusdam voluptatum, unde
        aspernatur reprehenderit fugiat dolores blanditiis? Recusandae debitis
        facilis eaque expedita facere aperiam alias ipsa fugiat.
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://google.com";
        }}
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
