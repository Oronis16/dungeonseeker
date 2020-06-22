import React, { useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./Header";
import { Actions } from "./Actions";
import "antd/dist/antd.css";
import StoryContext from "./Context/StoryContext";
import { Chapter } from "./Chapters/Chapter";

const reducer = (state, action) => {
  switch (action.type) {
    case "initStory":
      return { ...state, story: action.payload };
    case "nextChapter":
      return { ...state, chapterId: state.chapterId + 1 };
    case "nextQuestion":
      return { ...state, questionId: state.questionId + 1 };
    case "prologueDoneChange":
      return { ...state, prologueDone: true };
    case "chapterProlDoneChange":
      return { ...state, chapterProlDone: true };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    story: null,
    chapterId: 1,
    questionId: 1,
    prologueDone: false,
    chapterProlDone: false,
  });

  useEffect(() => {
    fetch("data-en_us.json")
      .then((response) => response.json())
      .then((stories) => {
        dispatch({ type: "initStory", payload: stories });
      });
  }, []);

  return (
    <StoryContext.Provider value={{ ...state, dispatch }}>
      <div className="App">
        <Header />
        {state.story && <Actions />}
      </div>
    </StoryContext.Provider>
  );
};

export default App;
