import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Meme from './components/Meme';

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  
  useEffect(() => {
    console.log(currentTemplate)
    console.log(memeTemplates);
  }
  );


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

  return (
    <div className="App">
      <h1>mem gen</h1>
      <button onClick={fetchTemplatesMeme}>Show Templates</button>
      {currentTemplate ?
        <div className="creatingMeme">
          <Meme onClick={() => setCurrentTemplate(null)} key={currentTemplate.id} key={currentTemplate.id} name={currentTemplate.name} url={currentTemplate.url} />
        </div>
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