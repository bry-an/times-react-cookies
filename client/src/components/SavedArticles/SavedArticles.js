import React, { Component } from "react";
import axios from "axios";
import SavedArticleListItem from "./SavedArticleListItem/SavedArticleListItem"
import './SavedArticles.scss'

class SavedArticles extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    console.log("getting saved articles");
    axios
      .get("/api/articles")
      .then(res => res.data)
      .then(res =>
        this.setState({
          savedArticles: res
        })
      );
  };

  deleteArticle = article => {
    const id = article.id;
    console.log(id);
    axios.delete("/api/articles/" + id).then(_ => this.getSavedArticles());
  };

  render() {
    return (
      <div className="saved-articles">
        <div className="article-list-header">
          <h2>Your Saved Articles</h2>
        </div>
        <div className="article-list-results" />
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.savedArticles.length
              ? this.state.savedArticles.map(article => (
                  <SavedArticleListItem
                    key={article.url}
                    url={article.url}
                    date={article.date}
                    title={article.title}
                    subtitle={article.subtitle}
                    buttonMethod={this.deleteArticle}
                    id={article._id}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SavedArticles;
