import React from "react"; 
import { Route, Redirect } from "react-router-dom"; 
import { PublicRouterLayout } from "./routeLayout";
//import storage from 'utils/storage'; 

export const PublicRoute = props => {  

  const { component: Component, ...restProps } = props; 
  if (!Component) return null;
  return (
    <Route
      {...restProps}
      render={routeRenderProps =>
        <PublicRouterLayout>
            <Component {...routeRenderProps} />
        </PublicRouterLayout>
      }
    />
  );

};
