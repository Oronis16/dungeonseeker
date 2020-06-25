import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Answer, Radio } from "../Styled-components/styled";

export const Answers = ({ choices }) => {
  const { dispatch } = useContext(StoryContext);

  const handleChange = (answer) => {
    dispatch({ type: "nextQuestion", payload: answer.nextStoryId });
  };

  return (
    <div>
      {choices.answers.map((answer) => {
        return (
          <Radio>
            <input
              id="answer"
              type="radio"
              name="group"
              onChange={() => handleChange(answer)}
            />
            <Answer for="answer">{answer.text}</Answer>
          </Radio>
        );
      })}
    </div>
  );
};
