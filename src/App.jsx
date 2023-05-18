import React from 'react';
import './app.scss';
import {
  BrowserRouter as Router, 
  Routes, Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import UrlShortener from './pages/urlShortener/UrlShortener';

const App = () =>  {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/urlShortener' element={<UrlShortener />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
