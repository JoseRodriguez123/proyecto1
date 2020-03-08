import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Terminales from '../../pages/Terminales';
import TerminalesA from '../../Formularios/TerminalesA';

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
      <li class="nav-item active">
        <a class="nav-link" href="#">Promociones<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Terminales">Terminales</Link>
      
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Conocenos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ayuda</a>
      </li>
    </ul>
  </div>
</nav>
<hr></hr>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Terminales" exact component={Terminales}/>
                <Route path="/formulario" exact component={TerminalesA}/>
            </Switch>
        </div>

      </Router>

 
        );
    }
}
export default Header;