import React from 'react';
import { FaLinkedin, FaGithub, FaDatabase } from 'react-icons/fa';
import logo from './logo.png';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="button-container">
        <p className="p">NETWORK</p>
          <a
            href="https://www.linkedin.com/in/robertasoliman/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-network"
          >
             <FaLinkedin />
          </a>

          <a
            href="https://github.com/robertasolimandonofreo"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-network"
          >
             <FaGithub />
          </a>
        </div>
        <p className="p">TESTS</p>
        <div className="button-container">
          <a
            href="db"
            rel="noopener noreferrer"
            className="custom-network"
          >
             <FaDatabase />
          </a>
          </div>

      </header>
    </div>
  );
}

export default App;
