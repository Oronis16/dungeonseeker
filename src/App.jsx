import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Actions } from "./Actions";
import "antd/dist/antd.css";
import StoryContext from "./Context/StoryContext";

const App = () => {
  const [stories, setStories] = useState();
  const [question, setQuestion] = useState(1);

  useEffect(() => {
    fetch("data-en_us.json")
      .then((response) => response.json())
      .then((stories) => {
        setStories(stories);
      });
  }, []);

  return (
    <StoryContext.Provider value={stories}>
      <div className="App">
        <Header />
        {stories && <Actions />}
      </div>
    </StoryContext.Provider>
  );
};

export default App;
