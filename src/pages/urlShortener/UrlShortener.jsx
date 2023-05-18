import React, {useState} from 'react';
import './urlShortener.scss';
import InputShortener from '../../components/inputShortener/InputShortener';
import LinkResult from '../../components/linkResult/LinkResult';

const UrlShortener = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='urlShortener'>
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  )
}

export default UrlShortener;