/* eslint-disable react/prop-types */
import React from "react";
import {
  AddToCart,
  Container,
  Image,
  Price,
  PriceDescription,
  TextDescription,
  Title,
} from "./styled";

const FoodItem = ({ image, title, price }) => (
  <Container>
    <Image src={`${process.env.PUBLIC_URL}/assets/images/${image}`} />
    <TextDescription>
      <Title>{title}</Title>
      <PriceDescription>
        <AddToCart>ADD TO CART</AddToCart>
        <Price>${price}</Price>
      </PriceDescription>
    </TextDescription>
  </Container>
);

export default FoodItem;
