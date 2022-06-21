import "./App.scss";
import React, { useState } from "react";
import CreatingMeme from "./components/CreatingMeme/CreatingMeme";
import GeneratedMeme from "./components/GeneratedMeme/GeneratedMeme";
import TemplateList from "./components/TemplateList/TemplateList";
import Navigation from "./components/Navigation/Navigation";

import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/'>
          <Route index element={<TemplateList />} />
          <Route path='/create' element={<CreatingMeme />} />
          <Route path='/meme/:id' element={<GeneratedMeme />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;