import React from "react"; 
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history"; 

import { PublicRoute } from "./routeMapper";

import * as RouteConfig from "./routeConfig.js"; //configure all path in this file 

export default function Main() {
  const { publicRoutes } = RouteConfig;
  // scroll top on routes change
  const history = createHistory();
  history.listen(_ => {
    window.scrollTo(0, 0);
  });

  return ( 
        <Router history={history}> 
            <Switch> 
              {publicRoutes.map(publicRouteProps => (
                <PublicRoute {...publicRouteProps} />
              ))}
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch> 
        </Router> 
  );
}
