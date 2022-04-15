import axios from "axios";
import "./App.scss";
import React, { useState, useEffect } from "react";
import CreatingMeme from "./components/CreatingMeme/CreatingMeme";
import GeneratedMeme from "./components/CreatedMeme/CreatedMeme";
import TemplateList from "./components/TemplateList/TemplateList";
import Navigation from "./components/Navigation/Navigation";

import { ReactComponent as Loader } from "./assets/loader.svg";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [createdMeme, setCreatedMeme] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTemplatesMeme = () => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(res => {
        let data = res.data.data.memes;
        setMemeTemplates(data);
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTemplatesMeme();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            loading ?
              <TemplateList setCurrentTemplate={setCurrentTemplate} memeTemplates={memeTemplates} />
              : <Loader />
          }
        />
        <Route
          path="/create/:templateId"
          element={
            <CreatingMeme
              template={currentTemplate}
              setCreatedMeme={setCreatedMeme}
              fetchTemplatesMeme={fetchTemplatesMeme}
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