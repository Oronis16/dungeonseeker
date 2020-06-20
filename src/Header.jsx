import React from "react";
import styled from "styled-components";

const Title = styled.span`
  font-size: 60px;
  justify-content: center;
  display: flex;
  margin: 30px;
  border: 5px black double;
  padding: 20px;
  background-color: #556b2f;
  color: white;
  font-weight: bold;
`;

export const Header = () => {
  return <Title>DUNGEONSEEKER</Title>;
};
