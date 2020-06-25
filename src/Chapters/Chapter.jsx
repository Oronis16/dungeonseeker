import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Button } from "antd";
import { Question } from "../Questions/Question";
import { Tale, Title } from "../Styled-components/styled";

export const Chapter = () => {
  const { story, chapterId, dispatch, chapterProlDone } = useContext(
    StoryContext
  );

  const handleChange = () => {
    dispatch({ type: "chapterProlDoneChange" });
  };

  let chapter = story.chapters.find((chapter) => chapter.id === chapterId);

  if (chapterProlDone === false) {
    return (
      <Tale>
        <Title>{chapter.prologue.title}</Title>
        <p>{chapter.prologue.text}</p>
        <Button onClick={handleChange}>Next</Button>
      </Tale>
    );
  }

  return <Question chap={chapter} />;
};
