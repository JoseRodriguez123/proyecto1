import React, { Component } from 'react';

import { Link } from 'react-router-dom';



class Sesion extends Component {
  render() {
    return (

      <div>
      
        <form>
        
          <div class="form-group p-4 ">
            <label for="exampleInputEmail1">Correo electronico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" class="form-text text-muted">Ingrse el correo electronico con el que se registro</small>
  </div>
            <div class="form-group p-4">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
              <div class="form-group form-check p-4">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Recordar cuenta</label>
  </div>
                <button type="submit" class="btn btn-primary">continuar</button>
                
                <form class="form-inline my-10 my-lg-3">
                <Link class="btn btn-primary" to= "/registro" role="button">Registrarse</Link>

            </form>
            </form>


          
            
           
                


            </div>


    );
  }
}
export default Sesion;