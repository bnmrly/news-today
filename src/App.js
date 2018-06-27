import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './components/Articles.css';
import Nav from './components/Nav';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';
import Article from './components/Article';
import Topic from './components/Topic';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Header />
        <Nav />
        <main className="main-container">
          <Route exact path="/" component={ArticlesList} />
          <Route exact path="/articles" component={ArticlesList} />
          <Route
            exact
            path="/articles/:article_id"
            render={props => <Article {...props} />}
          />
          <Route
            exact
            path="/topics/:topic"
            render={props => <Topic {...props} />}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
