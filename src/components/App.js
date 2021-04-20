import React from "react";
import { Router } from "@reach/router";
import StartPage from "./Startpage";
import SwipePage from "./SwipePage";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <StartPage path="/" exact />
        <SwipePage path="/swipe" />
        <NotFound default />
      </Router>
      <Footer />
    </>
  );
};

export default App;
