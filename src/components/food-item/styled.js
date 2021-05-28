import styled from "styled-components";

export const Container = styled.div`
  max-width: 280px;
`;

export const TextDescription = styled.div`
  padding: 16px;
  text-align: left;
  border-bottom: 1.5px solid #64b5d6;
  border-left: 1.5px solid #64b5d6;
  border-right: 1.5px solid #64b5d6;
`;

export const Image = styled.div`
  width: 280px;
  height: 300px;
  border: 1px solid #64b5d6;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 28px;
  text-decoration: underline;
  color: #dedede;
`;

export const PriceDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddToCart = styled.h3`
  font-size: 16px;
`;

export const Price = styled.p`
  font-size: 26px;
  color: #64b5d6;
`;
