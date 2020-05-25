import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home';
import Promociones from '../../Pages/Promociones';
import Terminales from '../../Pages/Terminales';
import Conocenos from '../../Pages/Conocenos';
import Ayuda from '../../Pages/Ayuda';
import Boletoviaje from '../../Pages/Ayuda/Boletoviaje';
import Atencionclientes from '../../Pages/Ayuda/Atencionclientes';
import Acercade from '../../Pages/Acercade';
import Metodopago from '../../Pages/Ayuda/Metodopago';
import Sesion from '../../Pages/Sesion';
import Registrarse from '../../Pages/Registrarse';


class Header extends Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">

          <Link class="nav-link active text-dark font-weight-normal" to="/Travel Center">Travel Center<span class="sr-only">(current)</span></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item">
                <Link class="nav-link" to="/Promociones">Promociones</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Terminales">Terminales</Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ayuda
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/Boleto de viaje">Boleto de viaje</Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/Atención a clientes">Atención a clientes</Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/Acerca de Travel Center">Acerca de Travel Center</Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/Métodos de pago">Métodos de pago</Link>
                </div>
              </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
            <Link class="btn btn-primary" to= "/Sesion" role="button">Inicio de sesion</Link>
            </form>


          </div>
        </nav>

        <hr></hr>
        <div>
          <Switch>
            <Route path="/Travel Center" exact component={Home} />
            <Route path="/Promociones" exact component={Promociones} />
            <Route path="/Terminales" exact component={Terminales} />
            <Route path="/Conocenos" exact component={Conocenos} />
            <Route path="/Ayuda" exact component={Ayuda} />
            <Route path="/Boleto de viaje" exact component={Boletoviaje} />
            <Route path="/Atención a clientes" exact component={Atencionclientes} />
            <Route path="/Acerca de Travel Center" exact component={Acercade} />
            <Route path="/Métodos de pago" exact component={Metodopago} />
            
          </Switch>
          < Route path="/sesion" exact component={Sesion}/>  
          < Route path="/registro" exact component={Registrarse}/>  
      
        </div>

      </Router>

    );
  }
}
export default Header;
