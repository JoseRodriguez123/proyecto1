import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Promociones from '../../pages/Promociones';
import Terminales from '../../pages/Terminales';
import Conocenos from '../../pages/Conocenos';
import Ayuda from '../../componentes/ayuda';

class Header extends Component {

  render() {
    return (
      <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">Travell Center</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item">
        <Link class="nav-link" to="/Promociones">Promociones></Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/Terminales">Terminales</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/Conocenos">Conocenos</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/Ayuda">Ayuda</Link>
      </li>
    </ul>
  </div>
</nav>
<hr></hr>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Promociones" exact component={Promociones}/>
                <Route path="/Terminales" exact component={Terminales}/>
                <Route path="/Conocenos" exact component={Conocenos}/>
                <Route path="/Ayuda" exact component={Ayuda}/>
              
            </Switch>
        </div>

      </Router>

 
        );
    }
}
export default Header;