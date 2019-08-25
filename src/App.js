import React from "react";

import { Route, Switch } from "react-router-dom";
import Header from "./header";
import MainPage from "./pages/main-page";
import ItemDetailsPage from "./pages/item-details-page";
import AboutPage from './pages/about-page';

export default function App() {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/Recipes-blog-react" component={MainPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route
          path="/Recipes-blog-react/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <ItemDetailsPage itemId={id} />;
          }} />
      </Switch>
    </main>
  );
}
