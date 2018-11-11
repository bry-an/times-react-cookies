import React, { Fragment, Component } from "react";
import "../../assets/css/skeleton.css";
import "./ArticleSearch.scss";
import api from "../../utils/api";
import moment from "moment";
import ArticleList from "./ArticleList/ArticleList";
import axios from "axios";

class ArticleSearch extends Component {
  state = {
    searchQuery: "",
    beginningDate: "",
    endingDate: "",
    articles: [],
    saved: []
  };


  componentDidMount () {
    this.getSavedArticles()
  }

  saveArticle = article => {
    axios.post('/api/articles', article)
      .then(res => {
        // if (res.data.upserted) {
        const savedArticleUrl = article.url
        const newArticles = this.state.articles
        newArticles.forEach(article => {
          if (article.url === savedArticleUrl)
          article.saved = true
        })

        this.setState({
          articles: newArticles, 
          saved: [...this.state.saved, article.url]
        })
      // }
    })
  }

  getSavedArticles = () => {
    axios 
      .get('/api/articles')
      .then(res => res.data)
      .then(res => 
        this.setState({
          saved: res.map(article => article.url)
        })
      )
  }

  articleQuery = query => {
    api.articleQuery(query).then(res => {
      const articleArr = res.data.response.docs
      const articles = articleArr.map(article => ({
        title: article.headline.main,
        subtitle: article.snippet,
        url: article.web_url,
        date: article.pub_date,
        id: article._id,
        saved: this.state.saved.includes(article.web_url)
          ? true 
          : false
      }));
      this.setState({
        articles
      });
    });
  };

  articleQueryByDate = (query, beginningDate, endingDate) => {
    api.articleQueryByDate(query, beginningDate, endingDate)
      .then(res => {
        const articleArr = res.data.response.docs;
        const articles = articleArr.map(article => ({
          title: article.headline.main,
          subtitle: article.snippet,
          url: article.web_url,
          date: article.pub_date,
          id: article._id,
          saved: this.state.saved.includes(article.web_url)
            ? true
            : false
        }));
        this.setState({
          articles
        });
      })
  };

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

  submitBtnHandler = event => {
    event.preventDefault();
    if (!this.state.searchQuery) {
      return
    }
    if (!this.state.beginningDate && !this.state.endingDate) {
      this.articleQuery(this.state.searchQuery);
    }
    if (this.state.beginningDate && this.state.endingDate) {
      const beginningDate = this.state.beginningDate;
      const endingDate = this.state.endingDate;
      const formattedBeginningDate = moment(beginningDate).format("YYYYMMDD");
      const formattedEndingDate = moment(endingDate).format("YYYYMMDD");
      this.articleQueryByDate(
        this.state.searchQuery,
        formattedBeginningDate,
        formattedEndingDate
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div id="search-form">
          <form>
            <label>
              <span id="search-form-label">Search Term(s):</span>
              <input
                type="text"
                name="searchQuery"
                placeholder="Search"
                onChange={this.inputHandler}
              />
            </label>
          </form>
          <div className="time-select">
            <div className="row">
              <p>Optional: Search Archive</p>
            </div>
            <div className="row">
              <div className="six columns">
                <form>
                  <label>
                    <span id="search-form-label">From:</span>
                    <input
                      type="date"
                      name="beginningDate"
                      className="dateInput"
                      placeholder="Beginning Date"
                      onChange={this.inputHandler}
                    />
                  </label>
                </form>
              </div>
              <div className="six columns">
                <form>
                  <label>
                    <span id="search-form-label">To:</span>
                    <input
                      type="date"
                      name="endingDate"
                      className="dateInput"
                      placeholder="Ending Date"
                      onChange={this.inputHandler}
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="submit">
            <button onClick={this.submitBtnHandler} id="search-submit-btn">
              Submit
            </button>
          </div>
        </div>
        <ArticleList
          saveArticle={this.saveArticle}
          articles={this.state.articles}
        />
      </Fragment>
    );
  }
}

export default ArticleSearch;
