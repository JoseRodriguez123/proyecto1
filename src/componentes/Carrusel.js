import React, { Component } from 'react';

import '../Estilos/estiloimage.css';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';


class Carrusel extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit} className = "formp">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
    <img class="d-block w-100" src={slide1} alt="Tenosique"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>T E N O S I Q U E</h5>
            <strong>Tenosique tierra del pochó</strong>
        </div>
    </div>

    <div class="carousel-item">
    <img class="d-block w-100" src={slide3} alt="Palenque"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>P A L E N Q U E</h5>
            <strong>Palenque mundo maya</strong>
        </div>
    </div>

    <div class="carousel-item">
    <img class="d-block w-100" src={slide2} alt="E. Zapata"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>E. Z A P A T A</h5>
            <strong>El balcón del Usumacinta</strong>
        </div>
    </div>

    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div></form>

        );
    }
}
export default Carrusel;