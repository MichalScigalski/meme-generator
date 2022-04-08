import axios from "axios";
import "./App.scss";
import React, { useState, useEffect } from "react";
import Meme from "./components/Meme";
import CreatingMeme from "./components/CreatingMeme";
import GeneratedMeme from "./components/GeneratedMeme";
import Navigation from "./components/Navigation";
import SearchIcon from './img/search.png';
import { ReactComponent as Loader } from "./img/loader.svg";
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
        let data = res.data.data.memes;
        console.log(data[0].name);
        setMemeTemplates(data);
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
      <Navigation />
      {/* <Link style={{ fontSize: '42px', textDecoration: 'none', color: 'black' }} to="/" onClick={() => setSearch('')}>MemeGenerator</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            loading ?
              <main>
                <div className="SearchBar">
                  <img src={SearchIcon} alt="searchIcon" />
                  <input className="" type="text" placeholder="Type what template you looking for..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="memes">
                  {memeTemplates.filter((i) => i.name.toLowerCase().match(search.toLowerCase())).map(el => (
                    <Meme
                      onClick={() => setCurrentTemplate(el)}
                      template={el}
                      key={el.id}
                    />
                  ))}
                </div>
              </main> : <Loader />
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
          path="/meme/:id"
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