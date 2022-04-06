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


const objectToParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [memeTextFirst, setMemeTextFirst] = useState("");
  const [memeTextSecond, setMemeTextSecond] = useState("");
  const [createdMeme, setCreatedMeme] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(currentTemplate);
  }, [currentTemplate]);

  useEffect(() => {
    console.log(memeTemplates);
  }, [])

  const fetchTemplatesMeme = () => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemeTemplates(res.data.data.memes);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createMeme = (e) => {
    e.preventDefault();
    const params = {
      template_id: currentTemplate.id,
      username: process.env.REACT_APP_IMGFLIP_USERNAME,
      password: process.env.REACT_APP_IMGFLIP_PASSWORD,
      text0: memeTextFirst,
      text1: memeTextSecond,
    };
    axios
      .post(`https://api.imgflip.com/caption_image${objectToParam(params)}`)
      .then((res) => {
        setCreatedMeme(res.data);
        navigate("/meme");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTemplatesMeme();
  }, []);

  return (
    <div className="App">
      <Link style={{fontSize: '42px', textDecoration: 'none', color: 'black'}} to="/">MemeGenerator</Link>
      <Routes>
        <Route
          path="/"
          element={
            loading ?
              <div className="memes">
                {memeTemplates.map(el => (
                  <Meme
                    onClick={() => setCurrentTemplate(el)}
                    template={el}
                    key={el.id}
                  />
                ))}
              </div> : <Loader />
          }
        />
        <Route
          path="create"
          element={
            <CreatingMeme
              handleTextFirst={(e) => setMemeTextFirst(e.target.value)}
              handleTextSecond={(e) => setMemeTextSecond(e.target.value)}
              onSubmit={createMeme}
              onClick={() => {setCurrentTemplate(null); navigate('/')}}
              template={currentTemplate}
            />
          }
        />
        <Route
          path="meme"
          element={
            loading ?
              <GeneratedMeme
                meme={createdMeme}
                onClick={() => {
                  setCreatedMeme(null);
                  navigate('/create');
                }}
              /> : <Loader />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
