import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="header">
          <div className="header-title">
            <a href="index.html" className="site-title">
              News Today
            </a>
          </div>
          <nav className="nav">
            <button type="submit">Coding</button>
            <button type="submit">Cooking</button>
            <button type="submit">Football</button>
          </nav>
        </header>
        <main className="main-container">
          <article className="article-container">
            <ul>
              <li>Article here</li>
              <li>Article here</li>
              <li>Article here</li>
              <li>Article here</li>
            </ul>
          </article>
        </main>
        <footer className="footer">Footer here</footer>
      </div>
    );
  }
}

export default App;
