import React, { useContext } from "react";
import StoryContext from "../Context/StoryContext";
import { Button } from "antd";
import { Question } from "../Questions/Question";

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
      <div>
        <div>{chapter.prologue.title}</div>
        <p>{chapter.prologue.text}</p>
        <Button onClick={handleChange}>Next</Button>
      </div>
    );
  }

  return <Question chap={chapter} />;
};
