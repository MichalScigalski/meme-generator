import axios from "axios";
import "./App.scss";
import React, { useState, useEffect } from "react";
import CreatingMeme from "./components/CreatingMeme";
import GeneratedMeme from "./components/GeneratedMeme";
import TemplateList from "./components/TemplateList";
import Navigation from "./components/Navigation";

import { ReactComponent as Loader } from "./img/loader.svg";
import {
  Routes,
  Route,
  useNavigate,
  Link
} from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [createdMeme, setCreatedMeme] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTemplatesMeme = () => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(res => {
        let data = res.data.data.memes;
        console.log(data[0].name);
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
          path="/create"
          element={
            <CreatingMeme
              onClick={() => navigate(-1)}
              template={currentTemplate}
              setCreatedMeme={setCreatedMeme}
            />
          }
        />
        <Route
          path="/meme/:id"
          element={
            <GeneratedMeme
              meme={createdMeme}
              onClick={() => navigate(-2)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;