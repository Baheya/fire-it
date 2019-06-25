import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./Components/Posts";
import CreatePostContainer from "./Components/CreatePostContainer";
import CreatePost from "./Components/CreatePost";

const App = () => {
  return (
    <div className="App">
      {/* <Switch> */}
      <Posts />
      <CreatePostContainer />
      {/* </Switch> */}
    </div>
  );
};

export default App;
