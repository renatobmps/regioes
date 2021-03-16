import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Regioes from './pages/Regioes';
import SaoPaulo from './pages/SaoPaulo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/regioes" exact={true} component={Regioes} />
      <Route path="/sp" exact={true} component={SaoPaulo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
