import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import SiteTitle from './components/SiteTitle';
import Articles from './components/Articles';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="header">
          <SiteTitle />
          <Nav />
        </header>
        <main className="main-container">
          <article className="article-container">
            <Articles />
          </article>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
