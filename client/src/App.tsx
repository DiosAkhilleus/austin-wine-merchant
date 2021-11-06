import React from 'react';
import NavBar from './Components/NavBar';
import headerSVG from './Resources/header_title.svg';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FineWine from './Components/FineWine';
import Spirits from './Components/Spirits';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img className='header-svg' src={headerSVG} alt="Austin Wine Merchant" />
      </header>
      <NavBar />
      <Routes>
        <Route path='/wine' element={<FineWine />}/>
        <Route path='/spirits' element={<Spirits />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
