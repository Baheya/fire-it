import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import CreatePostContainer from './Components/CreatePostContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      <CreatePostContainer />
    </div>
  );
};

export default App;
