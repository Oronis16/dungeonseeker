import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

const Tale = styled.div`
  font-size: 30px;
  justify-content: center;
  display: flex;
  margin: 30px;
  border: 5px black dotted;
  padding: 20px;
  background-color: #f0fff0;
  font-weight: bold;
  flex-direction: column;
`;

const Title = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Actions = ({ story }) => {
  return (
    <div>
      <Tale>
        <Title>PROLOUGE</Title>
        <p>{story.prolouge}</p>
      </Tale>
      <Button>Back</Button>
      <Button>Next</Button>
    </div>
  );
};
