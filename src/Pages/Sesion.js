import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../Formularios/estiloSesion.css';

class Sesion extends Component {
  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit} className="formq">
          <form onSubmit={this.handleSubmit} className="formq input">
            <form onSubmit={this.handleSubmit} className="formq label">
              <div className="card mt-4">
                <div className="card-header">
                  Inicio de Sesion
                    </div>
                <div className="card-body">
                  <form>

                    <form className="px-4 py-3">
                      <div className="form-group">
                        <label for="exampleDropdownFormEmail1">Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                      </div>
                      <div className="form-group">
                        <label for="exampleDropdownFormPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                          <label class="form-check-label" for="dropdownCheck">
                            Recordar
        </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Continuar</button>
                    </form>
                    <div class="dropdown-divider"></div>



                    <form class="form-inline px-4 py-3">
                      <Link class="btn btn-primary" to="/registro" role="button">Registrarse</Link>

                    </form>
                  </form>
                </div>

              </div>

            </form>

          </form>

        </form>

      </div>

    );
  }
}
export default Sesion;
