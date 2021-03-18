import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './css/Regioes.css';
import Home from './pages/Home';
import Completo from './pages/Completo';
import Regioes from './pages/Regioes';
import Regiao from './pages/Regiao';
import UFs from './pages/UFs';
import UF from './pages/UF';
import Mesorregioes from './pages/Mesorregioes';
import Mesorregiao from './pages/Mesorregiao';
// import Microrregioes from './pages/Microrregioes';
// import Microrregiao from './pages/Microrregiao';
// import Municipios from './pages/Municipios';
// import Municipio from './pages/Municipio';
// import Distritos from './pages/Distritos';
// import Distrito from './pages/Distrito';

function notFound() {
  return(
    <>
    <h1>Ainda estamos no Brasil?</h1>
    <Link to="/">voltar</Link>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/completo" exact={true} component={Completo} />
      <Route path="/regiao" exact={true} component={Regioes} />
      <Route path="/regiao/:id" exact={true} component={Regiao} />
      <Route path="/uf" exact={true} component={UFs} />
      <Route path="/uf/:id" exact={true} component={UF} />
      <Route path="/mesorregiao" exact={true} component={Mesorregioes} />
      <Route path="/mesorregiao/:id" exact={true} component={Mesorregiao} />
      {/* <Route path="/microrregiao" exact={true} component={Microrregioes} /> */}
      {/* <Route path="/microrregiao/:id" exact={true} component={Microrregiao} /> */}
      {/* <Route path="/municipio" exact={true} component={Municipios} /> */}
      {/* <Route path="/municipio/:id" exact={true} component={Municipio} /> */}
      {/* <Route path="/distrito" exact={true} component={Distritos} /> */}
      {/* <Route path="/distrito/:id" exact={true} component={Distrito} /> */}
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
