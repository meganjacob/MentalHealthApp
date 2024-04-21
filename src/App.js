// App.js
import React, { useState, useEffect } from 'react';
import auth from './firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from './Chat';
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="App">
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      <Router>
        <div className="header">
          <h2 className="title"><a href="/">Jane</a></h2>
          <i>Your Everyday Mental Health Support Buddy</i>
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
