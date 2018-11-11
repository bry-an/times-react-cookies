import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleSearch from "./components/ArticleSearch/ArticleSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedArticles from "./components/SavedArticles/SavedArticles";
import NoMatch from './components/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ArticleSearch} />
              <Route exact path="/saved" component={SavedArticles} />
              <Route component = {NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
