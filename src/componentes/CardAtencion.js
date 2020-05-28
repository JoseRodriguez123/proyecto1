import React, { Component } from 'react';
import '../Estilos/estilotexto.css';

class CardAtencion extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="formp">
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <b>En travel center nos importas tú</b>
              <p>Ponemos a tu disposicion las maneras para comunicarte con nosotros
              y resolver cualquier duda o problema que tengas con neustra plataforma.
                </p>
              <div align="center"><img src="https://nextor.io/x_1/wp-content/uploads/2019/08/atnbl1-1030x538.png"></img></div>
              <hr></hr>
              <b>Comunicate con nosotros</b>
              <form>
                <div class="form-group">
                  <label for="exampleInputtext1">Nombre</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu nombre" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu email" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Mensaje</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
              </form>

            </blockquote>
          </div>
        </div>
      </form>
    );
  }
}
export default CardAtencion;