import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  </Router>,
  document.getElementById("root")
);
