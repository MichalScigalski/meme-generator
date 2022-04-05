import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Meme from './components/Meme';
import CreatingMeme from "./components/CreatingMeme";
import GeneratedMeme from "./components/GeneratedMeme";

const objectToParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return '?' + params.join('&');
}

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [memeTextTop, setMemeTextTop] = useState('');
  const [memeTextBottom, setMemeTextBottom] = useState('');
  const [createdMeme, setCreatedMeme] = useState(null);

  // useEffect(() => {
  //   console.log(currentTemplate)
  // }, [currentTemplate]);

  // useEffect(() => {
  //   console.log(memeTextTop);
  //   console.log(memeTextBottom);
  // }, [memeTextTop, memeTextBottom])

  const fetchTemplatesMeme = () => {
    axios.get("https://api.imgflip.com/get_memes")
      .then(res => {
        setMemeTemplates(res.data.data.memes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createMeme = (e) => {
    e.preventDefault();
    const params = {
      template_id: currentTemplate.id,
      username: process.env.REACT_APP_IMGFLIP_USERNAME,
      password: process.env.REACT_APP_IMGFLIP_PASSWORD,
      text0: memeTextTop,
      text1: memeTextBottom
    }
    axios.post(`https://api.imgflip.com/caption_image${objectToParam(params)}`)
      .then(res => {
        setCreatedMeme(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchTemplatesMeme();

  return (
    <div className="App">
      <h1>MemeGenerator</h1>
      {currentTemplate ?
        createdMeme ?
          <GeneratedMeme meme={createdMeme} onClick={() => setCreatedMeme(null)} />
          : <CreatingMeme handleTextTop={(e) => setMemeTextBottom(e.target.value)} handleTextBottom={(e) => setMemeTextTop(e.target.value)} onSubmit={createMeme} onClick={() => setCurrentTemplate(null)} url={currentTemplate.url} name={currentTemplate.name} />

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