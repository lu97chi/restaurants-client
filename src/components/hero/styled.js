import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 700px;
`;

export const HeroSection = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
`;

export const Interaction = styled.div`
  padding-left: 20%;
  padding-top: 10%;
  text-align: left;
  h2,
  h1,
  p {
    color: #795548;
  }
`;

export const Welcome = styled.h2`
  font-size: 30px;
`;

export const Brand = styled.h1`
  font-size: 72px;
`;

export const LabelBrand = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #42342e;
  color: #ffffff;
  margin-top: 20px;
`;
