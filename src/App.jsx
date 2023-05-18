import React, { useState } from 'react';
import './app.scss';
import InputShortener from './components/inputShortener/InputShortener';
import LinkResult from './components/linkResult/LinkResult';
// import BackgroundAnimate from './components/backgroundAnimate/BackgroundAnimate';

const App = () =>  {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  )
}

export default App;
