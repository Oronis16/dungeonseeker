import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Button } from "antd";

export const Question = ({ chap }) => {
  const { questionId, dispatch } = useContext(StoryContext);

  console.log(chap);

  let action = chap.stories.find((action) => action.id === questionId);
  console.log(action);
  console.log(action.id);

  const handleChange = () => {
    dispatch({ type: "nextQuestion" });
  };

  return (
    <div>
      <div>{action.title}</div>
      <p>{action.text}</p>
      <p>{action.question}</p>
      <Button onClick={handleChange}>Next</Button>
    </div>
  );
};
