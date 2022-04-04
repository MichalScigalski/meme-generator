import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Meme from './components/Meme';
import CreatingMeme from "./components/CreatingMeme";

const objectToParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return '?' + params.join('&');
}

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

  const createMeme = async (e) => {
    e.preventDefault();
    const params = {
      template_id: currentTemplate.id,
      username: process.env.REACT_APP_IMGFLIP_USERNAME,
      password: process.env.REACT_APP_IMGFLIP_PASSWORD,
      text0: 'gora',
      text1: 'dol'
    }


    const response = await fetch(`https://api.imgflip.com/caption_image${objectToParam(params)}`)
    const data = await response.json();
    console.log(data);

    // e.preventDefault();
    // console.log(e.formData);
    // return axios
    //   .post('https://api.imgflip.com/caption_image',{
    //     template_id: currentTemplate.id,
    //     username: 'chased01',
    //     password: 'chased1234',
    //     text0: 'gora',
    //     text1: 'dol'
    //   })
    //   .then((res)=>{
    //     console.log(res);
    //   })
    //   .then((err)=>{
    //     console.log(err)
    //   })
  }

  return (
    <div className="App">
      <h1>MemeGenerator</h1>
      {currentTemplate ?
        <CreatingMeme onSubmit={createMeme} onClick={() => setCurrentTemplate(null)} url={currentTemplate.url} name={currentTemplate.name} />
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