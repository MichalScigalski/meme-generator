import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

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
      <button onClick={fetchMeme}>ok</button>
      {memesAll.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <img src={el.url} alt={el.name + '-image'} />
          </div>
        )
      })}

    </div>
  );
}

export default App;
