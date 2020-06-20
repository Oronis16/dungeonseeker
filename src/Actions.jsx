import React, { useContext } from "react";
import { Button } from "antd";
import styled from "styled-components";
import StoryContext from "./Context/StoryContext";

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

export const Actions = () => {
  const { story, prologueDone, dispatch } = useContext(StoryContext);

  const handleChange = () => {
    dispatch({ type: "prologueDoneChange" });
  };

  if (prologueDone === false) {
    return (
      <div>
        <Tale>
          <Title>{story.prologue.title}</Title>
          <p>{story.prologue.text}</p>
          <Button onClick={handleChange}>Let's play!</Button>
        </Tale>
      </div>
    );
  }


  return (
    <div>
      <Tale>
        <Title>{story.chapters[0].prologue.title}</Title>
        <p>{story.chapters[0].prologue.text}</p>
      </Tale>
    </div>
  );
};
