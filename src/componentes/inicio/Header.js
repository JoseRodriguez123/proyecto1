import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Promociones from '../../pages/Promociones';
import Terminales from '../../pages/Terminales';
import Conocenos from '../../pages/Conocenos';
import Ayuda from '../../componentes/ayuda';
import Sesion from '../../pages/Sesion';

class Header extends Component {

  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link class="nav-link text-dark font-weight-bold" to="/Travel Center">Travel Center</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item">
        <Link class="nav-link text-dark font-weight-normal" to="/Promociones">Promociones</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link text-dark font-weight-normal" to="/Terminales">Terminales</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link text-dark font-weight-normal" to="/Conocenos">Conocenos</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link text-dark font-weight-normal" to="/Ayuda">Ayuda</Link>
      </li>

      <li class="nav-item">
       <button type="button" class="btn btn-success text-dark font-weight-normal" to="/Iniciar sesion">Iniciar sesión</button>
      </li>



    </ul>
  </div>
</nav>
<hr></hr>
        <div>
            <Switch>
                <Route path="/Travel Center" exact component={Home}/>
                <Route path="/Promociones" exact component={Promociones}/>
                <Route path="/Terminales" exact component={Terminales}/>
                <Route path="/Conocenos" exact component={Conocenos}/>
                <Route path="/Ayuda" exact component={Ayuda}/>
                <Route path="/Iniciar sesion" exact component={Sesion}/>
              
            </Switch>
        </div>

      </Router>

 
        );
    }
}
export default Header;