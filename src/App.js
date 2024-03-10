import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="button-container">
          <p>Seguem minhas redes sociais:</p>
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
      </header>
    </div>
  );
}

export default App;
