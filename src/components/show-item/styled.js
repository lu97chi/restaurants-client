import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  text-align: left;
  padding: 12px;
  margin: 24px;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  color: #404040;
  font-size: 20px;
`;

export const Text = styled.p`
  color: #404040;
  font-size: 16px;
`;

export const SeeMore = styled.span`
  color: #304c89;
  text-decoration: underline;
  cursor: pointer;
`;
