/* eslint-disable react/prop-types */
import React from "react";
import { Title, Text, Container, SeeMore, Icon } from "./styled";

const ShowItem = ({ title, subtitle, icon }) => (
  <Container className="shadow-md">
    <Icon src={`${process.env.PUBLIC_URL}/assets/icons/${icon}`} />
    <Title>{title}</Title>
    <Text>{subtitle}</Text>
    <SeeMore>See more</SeeMore>
  </Container>
);

export default ShowItem;
