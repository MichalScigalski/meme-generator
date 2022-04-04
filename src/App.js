import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Meme from './components/Meme';
import CreatingMeme from "./components/CreatingMeme";

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  useEffect(() => {
    console.log(currentTemplate)
  }, [currentTemplate]);


  const fetchTemplatesMeme = () => {
    return axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemeTemplates(res.data.data.memes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchTemplatesMeme();
  return (
    <div className="App">
      <h1>MemeGenerator</h1>
      {currentTemplate ?
        <CreatingMeme onClick={() => setCurrentTemplate(null)} key={currentTemplate.id} url={currentTemplate.url} name={currentTemplate.name} />
        : <div className="memes">
          {memeTemplates.map((el) =>
            <Meme onClick={() => setCurrentTemplate(el)} key={el.id} name={el.name} url={el.url} />
          )}
        </div>
      }
    </div>
  );
}

export default App;