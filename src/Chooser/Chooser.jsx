import React, { useContext } from "react";
import { Answers } from "../Answers/Answers";
import StoryContext from "../Context/StoryContext";

export const Chooser = ({ story }) => {
  const { dispatch } = useContext(StoryContext);
  const handleClick = () => {
    if (story.prevStoryRef != null) {
      //ha létezik Back
      dispatch({
        type: "nextQuestion",
        payload: {
          nextQuestion: story.prevStoryRef,
        },
      });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  };

  if (story.answers == null) {
    return (
      <button onClick={handleClick}>
        {story.prevStoryRef ? "Back" : "Next"}
      </button>
    );
  }
  return <Answers choices={story.answers} />;
};
