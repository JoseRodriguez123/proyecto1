import React, { Component } from 'react';
import '../Estilos/estilotexto.css';

class Card3 extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit} className = "formp">
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
                <b>Es tiempo de recorrer lo que deseas</b>
                <p>Sabemos que las posibilidades de viajar y descubrir nuevos lugares
                    van en aumento, gracias a nuestras líneas de autobuses que ofrecen
                    un largo recorrido para llevarte hasta el lugar en donde deseas estar.
                    Es momento de dar comienzo a nuevas aventuras con toda la facilidad de 
                    cruzar límites, acompañado siempre del máximo confort en nuestros autobuses.
                </p>
                <b>¡Conócelos y viaja con nosotros!</b>                
            </blockquote>
            <hr></hr>
            <div align="center"><img src="https://s3.amazonaws.com/cdn.precioyviajes.com/documents/PageHeaderLandingPage/18/10/12/gh4am7uqkbx5gnxu0ft7_or.jpg"></img></div>
          </div>
        </div>
      </form>
        );
    }
}
export default Card3;