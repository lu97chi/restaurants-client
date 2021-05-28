import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1px;
  justify-content: space-around;
`;

export const Menu = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;
export const MenuItem = styled.div`
  font-size: 16px;
  color: #404040;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? "3px solid #1A1912" : "none")};
  text-transform: capitalize;
  transition: 0.3s ease all;
  height: 55px;
`;

export const ActionButtons = styled.div`
  width: 25%;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 35px;
  color: #404040;
  border: 1px solid #efd8c3;
  width: 150px;
  margin-bottom: 20px;
`;
