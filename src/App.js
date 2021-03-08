import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let responseJson;
      // put data fetching code here!
      const response = await fetch('http://demo1390455.mockable.io/articles')
      responseJson = await response.json()
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
      <div className="App">
        <Switch>
          <Route path="/articlelist" exact>
            <ArticleList props={Object.values(fetchedData)}/>
          </Route>
          <Route
              path="/articlelist/:slug"
              render={({match}) => <DynamicArticle article={fetchedData[match.params.slug]} />}/>
        </Switch>
      </div>
  );
}

export default App;