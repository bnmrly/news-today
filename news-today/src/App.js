import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Articles.css';
import Nav from './components/Nav';
import SiteTitle from './components/SiteTitle';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';
import Article from './components/Article';
import * as api from './api.js';

class App extends Component {
  state = {
    articleData: []
  };

  componentDidMount = () => {
    api.fetchArticles().then(articles => {
      this.setState({ articleData: articles });
    });
  };

  render() {
    return (
      <div className="App-container">
        <header className="header">
          <SiteTitle />
        </header>
        <nav className="nav">
          <Nav />
        </nav>
        <main className="main-container">
          <section className="article-container">
            <Switch>
              <Route
                exact
                path="/articles/:article_id"
                render={props => <Article {...props} />}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <ArticlesList articleData={this.state.articleData} />
                )}
              />
              <Route
                exact
                path="/articles"
                render={() => (
                  <ArticlesList articleData={this.state.articleData} />
                )}
              />
            </Switch>
          </section>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
