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
  fetchTemplatesMeme();
  return (
    <div className="App">
      <h1>mem gen</h1>
      {currentTemplate ?
        <div className="creatingMeme">
          <button onClick={() => setCurrentTemplate(null)}>Back to templates</button>
          <form>
            <img src={currentTemplate.url} title={currentTemplate.name} alt={currentTemplate.name+'-img'} />
            <input type="text" name="text0" placeholder="text on top" />
            <input type="text" name="text1" placeholder="text on bottom"/>
            <button type="submit">Create meme</button>
          </form>
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