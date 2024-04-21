// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from './Chat';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <h2 className="title"><a href="/">Jane</a></h2>
          <i>Your Everyday Mental Health Support</i>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
