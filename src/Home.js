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
          <h1>Welcome to Jane!</h1>
          <p>Jane is a mental health support chat bot. She is based on Google's Gemini AI model and is designed to provide helpful advice and guidance.</p>
          <p>Whether you are looking for  advice to get you through a rough time or want support that is accessible and free - Jane is always ready to support your needs.</p>
        </div>
        <div class="chatButton">
            <button onClick={() => window.location.href = '/chat'}>Start Chatting</button>
          </div>
    </div>
  );
}

export default HomePage;
