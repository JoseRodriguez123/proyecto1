import React, { Component } from 'react';
import Carrusel from '../componentes/Carrusel';
import Card2 from '../componentes/Card2';


class Home extends Component {
  render(){
    return(  
     
            <div>
                
                <Carrusel/>
                <hr></hr>
                <Card2/>
            </div>
        );
    }
}
export default Home;