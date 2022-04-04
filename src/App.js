import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Mem from './components/Mem';

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplateId, setCurrentTemplateId] = useState(0);

  useEffect(() => {
    console.log(currentTemplateId)
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
      <div className="memes">
        {memeTemplates.map((el, _index) =>
          <Mem onClick={()=>setCurrentTemplateId(el.id)} key={_index} id={el.id} name={el.name} url={el.url} />
        )}
      </div>
    </div>
  );
}

export default App;
