import React from "react";
import { Route, Switch } from "react-router-dom";
import RecommendationList from "./components/RecommendationList";
import WishList from "./components/WishList";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  {
    path: "/recommendationlist",
    key: "RECOMMENDATIONLIST",
    exact: true,
    component: RecommendationList
  },
  {
    path: "/wishlist",
    key: "WISHLIST",
    exact: true,
    component: WishList
  },
  {
    path: "/profile",
    key: "PROFILE",
    exact: true,
    component: Profile
  },
  {
    path: "/feed",
    key: "FEED",
    exact: true,
    component: Feed
  },
  { path: "/logout", key: "LOGOUT", exact: true, component: LogoutButton}
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
 function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 * https://www.ryanjyost.com/react-routing/
 */
export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }