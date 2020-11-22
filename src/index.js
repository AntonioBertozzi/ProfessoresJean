import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Professor from "./components/Professor";
import Sobre from "./components/Sobre";
import PostProfessor from "./components/PostProfessor";
import NavMenu from "./components/NavMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(<NavMenu />, document.getElementById("header-nav"));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastrar" component={PostProfessor} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/" component={Professor} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("body-content")
);
