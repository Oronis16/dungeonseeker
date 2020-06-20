import React from "react";
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
        <Title>{story.prologue.title}</Title>
        <p>{story.prologue.text}</p>
      </Tale>
      <Button>Back</Button>
      <Button>Next</Button>
    </div>
  );
};
