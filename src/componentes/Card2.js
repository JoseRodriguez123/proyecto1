import React, { Component } from 'react';
import '../Estilos/estilotexto.css';

class Card2 extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit} className = "formt">
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
                <b>Viaja sin límites con boletos de autobús en mano</b>
                <p>En Travel Center estamos comprometidos con tus viajes, así que nos dimos a la tarea
                  de poder comprar tu boleto de autobus o combi, estes donde estes y sea la hora que sea,
                  para que tengas la certeza de que siempre conseguiras un lugar y no vivas con la insertidumbre
                  de pensar en que pasaras largas horas de viaje parado, solo por no poder conseguir boleto.
                </p>
            </blockquote>
          </div>
        </div>
      </form>
        );
    }
}
export default Card2;