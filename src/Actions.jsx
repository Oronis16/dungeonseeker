import React, { useContext } from "react";
import { Button } from "antd";
import StoryContext from "./Context/StoryContext";
import { Chapter } from "./Chapters/Chapter";
import { Tale, Title } from "./Styled-components/styled";

export const Actions = () => {
  const { story, dispatch, prologueDone } = useContext(StoryContext);

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

  return <Chapter />;
};
