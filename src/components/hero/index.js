import React from "react";
import {
  Brand,
  Button,
  Container,
  HeroSection,
  Interaction,
  LabelBrand,
  Welcome,
} from "./styled";

const Hero = () => (
  <Container>
    <HeroSection width={"35%"}>
      <img src={process.env.PUBLIC_URL + "/assets/images/hero-left.jpeg"} />
    </HeroSection>
    <HeroSection
      width={"65%"}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/hero-right.jpeg)`,
      }}
    >
      <Interaction>
        <Welcome>Welcome to</Welcome>
        <Brand>LA MESA</Brand>
        <LabelBrand>{`Welcome to la mes here is some data`}</LabelBrand>
        <LabelBrand>{`Welcome to la mes here is some data`}</LabelBrand>
        <Button className="shadow-lg">Button</Button>
      </Interaction>
    </HeroSection>
  </Container>
);

export default Hero;
