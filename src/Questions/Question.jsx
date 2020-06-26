import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Tale, Title } from "../Styled-components/styled";
import { Chooser } from "../Chooser/Chooser";

export const Question = ({ chap }) => {
  const { questionId } = useContext(StoryContext);

  let story = chap.stories.find((story) => story.id === questionId);

  return (
    <Tale>
      <Title>
        {story.id}) {story.title}
      </Title>
      <p>{story.text}</p>
      <p>{story.question}</p>
      <Chooser story={story} />
    </Tale>
  );
};
