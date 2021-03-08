import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = ({props}) => {
    if(props.length === 0)
        return (<div>You have no data!</div>);
    else{
        return (
            <ul>
                {props.map(prop => <li key={prop.slug}>
                    <ArticleListItem props={prop} />
                </li>)}
            </ul>
        );
    }
}
export default ArticleList;