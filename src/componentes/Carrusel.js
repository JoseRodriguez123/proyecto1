import React, { Component } from 'react';


class Carrusel extends Component {
  render(){
    return(
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
    <img class="d-block w-100" src="https://i.ebayimg.com/images/g/18cAAOSwW7FdTonx/s-l800.jpg" alt="Tenosique"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>T E N O S I Q U E</h5>
            <p>Tenosique tierra del pochó</p>
        </div>
    </div>

    <div class="carousel-item">
    <img class="d-block w-100" src="https://viajarpormexico.com/wp-content/uploads/2018/09/Pueblo-Magico-Palenque-Viajar-por-mexico-00.png" alt="Palenque"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>P A L E N Q U E</h5>
            <p>Palenque mundo maya</p>
        </div>
    </div>

    <div class="carousel-item">
    <img class="d-block w-100" src="https://mayapolitictabasco.com/wp-content/uploads/2019/10/72141584_538343423594133_7391075074972844032_n-807x600.jpg" alt="E. Zapata"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>E. Z A P A T A</h5>
            <p>El balcón del Usumacinta</p>
        </div>
    </div>

    <div class="carousel-item">
    <img class="d-block w-100" src="images/slide1.png" alt="slide1"></img>
      <div class="carousel-caption d-none d-md-block">
            <h5>P R U E B A</h5>
            <p>Esta es una prueba</p>
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
</div>
        );
    }
}
export default Carrusel;