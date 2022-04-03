import axios from "axios";
import "./App.css";
import React, { useState } from "react";

function App() {
  // const [memesAll, setMemesAll] = useState[''];

  const fetchMeme = () => {
    return axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        console.log(res.data.data.memes);
        // console.log(memesAll);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>mem gen</h1>
      <button onClick={fetchMeme}>ok</button>
      {/* {memesAll.map((el)=>{
        <h1>el</h1>
      })} */}
    </div>
  );
}

export default App;
