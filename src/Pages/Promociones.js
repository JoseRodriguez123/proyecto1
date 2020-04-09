import React, { Component } from 'react';
import Card3 from '../componentes/Card3';

class Promociones extends Component {
  render(){
    return( 
            <div>
               
                <a href="paginaweb.html">
                <img src="https://mobility.ado.com.mx/file/v1799004381481119367/general/BANNER_LANDING.jpg"           
                alt="texto alternativo de la imagen" />
                </a>
                <hr></hr>
                <Card3/>
            </div> 
        );
    }
}
export default Promociones;