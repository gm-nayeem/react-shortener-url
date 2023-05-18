import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome To Home Page</h1>
      <Link to="/urlShortener" className='link'>
        <button>URL SHORTENER</button>
      </Link>
    </div>
  )
}

export default Home;