import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Mem from './components/Mem';

function App() {
  const [memesAll, setMemesAll] = useState([]);

  useEffect(() => {
    console.log(memesAll)
  }
  );

  const fetchMeme = () => {
    return axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemesAll(res.data.data.memes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>mem gen</h1>
      <button onClick={fetchMeme}>Show Templates</button>
      <div className="memes">
          {memesAll.map((el, _index) =>
            <Mem key={_index} id={el.id} name={el.name} url={el.url} />
          )}
      </div>
    </div>
  );
}

export default App;
