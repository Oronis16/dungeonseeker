import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Answer, Radio } from "../Styled-components/styled";

export const Answers = ({ choices }) => {
  const { dispatch } = useContext(StoryContext);

  console.log("Choices", choices);

  const handleChange = (answer) => {
    dispatch({
      type: "nextQuestion",
      payload: { nextQuestion: answer.nextStoryId },
    });
  };

  return (
    <div>
      {choices.map((answer, idx) => {
        return (
          <Radio for={`answer-${answer.id}`} key={idx}>
            <input
              id={`answer-${answer.id}`}
              type="radio"
              name="answer-group"
              onChange={() => handleChange(answer)}
            />
            <Answer for={`answer-${answer.id}`}>{answer.text}</Answer>
          </Radio>
        );
      })}
    </div>
  );
};
