import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

import './App.css';

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);


function HomePage() {
  return (
    <div className="App">
      <div className="homeImage">
            <img src="\images\home.jpg" alt="Description of the image" />
      </div>
        <div className="outer">
          <h1>About Us</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div class="chatButton">
            <button onClick={() => window.location.href = '/chat'}>Start Chatting</button>
          </div>
    </div>
  );
}

export default HomePage;
