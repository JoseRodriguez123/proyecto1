import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registrarse extends Component {
  render() {
    return (

      <div>
        <div className="card mt-4">
          <div className="card-header">
            Registrarse
                    </div>
          <div class="card-body">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" name="Nombre" placeholder="introducir nombre completo" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="apellidos" placeholder="introducir apellidos" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="numero" placeholder="introducir numeros de telefonos" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="introducir email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="contraseña" placeholder="contraseña" />
              </div>


              <button type="submit" class="btn btn-primary">guardar</button>
              <Link className="btn btn-primary  my-lg-5" to="/sesion" role="button">regresar</Link>
            </form>
          </div>
        </div>

      </div>
    );
  }
}
export default Registrarse;