import React from "react";
import { services } from "./constants";
import { Title, SubTitle, ShowCaseItems } from "./styled";
import ShowItem from "../show-item";

const ShowCase = () => (
  <div>
    <Title>Services we have now</Title>
    <SubTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
    </SubTitle>
    <ShowCaseItems>
      {services.map(({ title, subtitle, icon }) => (
        <ShowItem key={icon} icon={icon} title={title} subtitle={subtitle} />
      ))}
    </ShowCaseItems>
  </div>
);

export default ShowCase;
