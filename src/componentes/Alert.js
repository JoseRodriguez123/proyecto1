import React, { Component } from 'react';

class Alert extends Component {
  render(){
    return(
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Hola viajero!</strong> ¡Te damos la bienvenida al nuevo Travel Center! Feliz viaje.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
export default Alert;