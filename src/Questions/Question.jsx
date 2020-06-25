import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Button } from "antd";
import { Tale, Title } from "../Styled-components/styled";
import { Answers } from "../Answers/Answers";

export const Question = ({ chap }) => {
  const { questionId, dispatch } = useContext(StoryContext);

  let story = chap.stories.find((story) => story.id === questionId);

  const handleChange = () => {
    dispatch({ type: "nextQuestion" });
  };

  if (story.answers == null) {
    return (
      <Tale>
        <Title>{story.title}</Title>
        <p>{story.text}</p>
        <p>{story.question}</p>
        <Button onClick={handleChange}>Next</Button>
      </Tale>
    );
  }
  return (
    <Tale>
      <Title>{story.title}</Title>
      <p>{story.text}</p>
      <p>{story.question}</p>
      <Answers choices={story} />
    </Tale>
  );
};
