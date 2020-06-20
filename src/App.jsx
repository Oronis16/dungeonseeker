import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Actions } from "./Actions";
import "antd/dist/antd.css";

const App = () => {
  const [stories, setStories] = useState();
  const [question, setQuestion] = useState(1);

  useEffect(() => {
    fetch("story.json")
      .then((response) => response.json())
      .then((stories) => {
        setStories(stories);
      });
  }, []);

  if (stories) {
    
  }

  return (
    <div className="App">
      <Header />
      {stories && <Actions story={stories} />}
    </div>
  );
};

export default App;
