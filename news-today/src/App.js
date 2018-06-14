import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './components/Articles.css';
import Nav from './components/Nav';
import SiteTitle from './components/SiteTitle';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';
import Article from './components/Article';

class App extends Component {
  state = {
    articleData: []
  };

  componentDidMount = () => {
    this.fetchArticles().then(({ data: { articles } }) => {
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
          <article className="article-container">
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
          </article>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
  fetchArticles = () => {
    return axios
      .get('https://ben-nc-news.herokuapp.com/API/articles')
      .catch(err => err);
  };
}

export default App;
