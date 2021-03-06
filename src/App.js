import './App.scss';
import React from 'react';
import CreatingMeme from './components/CreatingMeme/CreatingMeme';
import GeneratedMeme from './components/GeneratedMeme/GeneratedMeme';
import TemplateList from './components/TemplateList/TemplateList';
import Navigation from './components/Navigation/Navigation';

import {
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
          <Route index element={<TemplateList />} />
          <Route path='create' element={<CreatingMeme />} />
          <Route path='meme/:id' element={<GeneratedMeme />} />
      </Routes>
    </div>
  );
}

export default App;