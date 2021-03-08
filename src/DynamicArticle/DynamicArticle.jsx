import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import {Link} from "react-router-dom";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add a back link to the main article list from your article page */}
        <div className="articleList">
            <Link to={`/articlelist`}>Back</Link>
        </div>

        <header>
            <h1>{props.article.title}</h1>
            <address>
                by {props.article.author} (
                <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
                <br />
            </address>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        </header>
        <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
