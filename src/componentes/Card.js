import React, { Component } from 'react';

import '../Estilos/estilotexto.css';
import Acerca4 from '../images/Acerca4.png';
import Acerca3 from '../images/Acerca3.png';

class Card extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit} className = "formt">
        <div class="card">

          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <b>Somos Travel Center</b>
              <p>En Travel Center® nos mueve el llevar y traer emociones de kilómetro a kilómetro con la misma emoción desde 2020.</p>
              <p>La historia comenzó con la idea de un grupo de estudiantes universitarios, para encontrar una forma de optimizar el proceso de como se adquieren los boletos de transporte.</p>
              <p>La importancia de la region de los rios nos motivó a ir por más y decidimos trazar rutas por todas las regiones del estado de Tabasco y al vecino estado de Chiapas, un estado que nos nabrió sus caminos para admirarlos y nunca más olvidarlos.</p>
              <p>Hoy llegamos a varios destinos y avanzamos hacia nuevos rumbos, la tarea no es fácil, pero todo cobra sentido cuando te decimos: Bienvenido.</p>
              <div align="center"><img src={Acerca4}></img></div>
              <hr></hr>
              <p>Busques lo que busques, lo encuentras en un viaje…</p>
              <p>Y así es como revolucionamos el mercado y la forma en que se adquieren los boletos, queremos que todos puedan adquirilos de una manera justa y ordenada.</p>
              <p>Somos una empresa mexicana que comparte sus valores contigo y te acompaña en cada recorrido a bordo de los autobuses de última generación que encuentras disponible en nuestra plataforma, ofreciéndote una experiencia única de principio a fin.</p>
              <p>Porque no solo movemos pasajeros; llevamos historias, reencuentros, sueños y el gran gusto de conocer nuevas formas de ver la vida.</p>
              <div align="center"><img src={Acerca3}></img></div>
              <hr></hr>
              <b>Cualquiera de nuestros destinos: el viaje perfecto de tu vida</b>
              <p>Siempre existe un espacio para viajar hacia un nuevo destino, lo expresamos porque hemos vivido a lo largo de nuestra historia un sinfín de recorridos a tu lado.</p>
            </blockquote>
          </div>
        </div>
      </form>
        );
    }
}
export default Card;