import React from "react";
import "./ArticleList.scss";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

const ArticleList = props =>  (
  <div className="article-list">
    <div className="article-list-header">
      <h2>Results</h2>
    </div>
    <table className='u-full-width'>
    <thead>
        <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {
            (props.articles.length
        ? props.articles.map(article=> <ArticleListItem 
            key= {article.url}
            url= {article.url}
            date={article.date} 
            title={article.title} 
            subtitle={article.subtitle} 
            id={article.id}
            saved={article.saved}
            buttonMethod={props.saveArticle}/>)
        : <tr><td></td><td>No search term entered</td></tr> )}
    </tbody>
    
    </table>
  </div>
    )


export default ArticleList;
