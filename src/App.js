import "./App.scss";
import React, { useState } from "react";
import CreatingMeme from "./components/CreatingMeme/CreatingMeme";
import GeneratedMeme from "./components/CreatedMeme/CreatedMeme";
import TemplateList from "./components/TemplateList/TemplateList";
import Navigation from "./components/Navigation/Navigation";

// import { ReactComponent as Loader } from "./assets/loader.svg";
import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [createdMeme, setCreatedMeme] = useState(null);
  // const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
              <TemplateList setCurrentTemplate={setCurrentTemplate} />
          }
        />
        <Route
          path="/create"
          element={
            <CreatingMeme
              template={currentTemplate}
              setCreatedMeme={setCreatedMeme}
            />
          }
        />
        <Route
          path="/meme/:id"
          element={
            <GeneratedMeme
              createdMeme={createdMeme}
              setCreatedMeme={setCreatedMeme}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;