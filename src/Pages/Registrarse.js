import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Formularios/estiloRegistro.css';

class Registrarse extends Component {
  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit} className="formt">
          <form onSubmit={this.handleSubmit} className="formt input">
          <form onSubmit={this.handleSubmit} className="formtt input">
            <form onSubmit={this.handleSubmit} className="formt label">
            
        <div className="card mt-4">
          <div className="card-header">
            Registrarse
                    </div>
          <div class="card-body">
            <form>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Nombre Completo</label>
                <input type="text" className="form-control" name="Nombre" />
              </div>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Apellidos</label>
                <input type="text" className="form-control" name="Apellidos" />
              </div>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Telefono</label>
                <input type="text" className="form-control" name="Numero" />
              </div>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Introducir Email</label>
                <input type="email" className="form-control" name="Email" />
              </div>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Contraseña</label>
                <input type="password" className="form-control" name="Contraseña" />   
              </div>

              <div className="form-group">
                <label for="exampleDropdownFormPassword1">Direccion</label>
                <input type="text" className="form-control " name="Direccion"  placeholder= "numero/calle/colonia"/>   
              </div>


              <button type="submit" class="btn btn-primary">guardar</button>
              <form class="form-inline ">
                <Link className="btn btn-primary  my-lg-3" to="/sesion" role="button">regresar</Link>
              </form>
            </form>
            
          </div>
        </div>
        </form>
        </form>
        </form>
        </form>

      </div>
    );
  }
}
export default Registrarse;
