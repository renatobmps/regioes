import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Completo from './pages/Completo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/completo" exact={true} component={Completo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
