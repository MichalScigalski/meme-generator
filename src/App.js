import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import Meme from "./components/Meme";
import CreatingMeme from "./components/CreatingMeme";
import GeneratedMeme from "./components/GeneratedMeme";
import { ReactComponent as Loader } from "./loader.svg";
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
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTemplatesMeme = () => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(res => {
        setMemeTemplates(res.data.data.memes);
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
      <Link style={{ fontSize: '42px', textDecoration: 'none', color: 'black' }} to="/">MemeGenerator</Link>
      <Routes>
        <Route
          path="/"
          element={
            loading ?
            <div>
              <input type="text" placeholder="type to search" value={search} onChange={(e)=>setSearch(e.target.value)} />
              <div className="memes">
                {memeTemplates.map(el => (
                  <Meme
                    onClick={() => setCurrentTemplate(el)}
                    template={el}
                    key={el.id}
                  />
                ))}
              </div> 
            </div>: <Loader />
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
          path="/meme"
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
