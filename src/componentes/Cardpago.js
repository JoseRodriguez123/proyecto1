import React, { Component } from 'react';
import '../Estilos/estilotexto.css';

class Cardpago extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit} className = "formp">
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
                <b>En travell center nos importa tu comodidad</b>
                <p>Ponemos a tu disposicion varias formas para que puedas realizar el pago
                    de los serivicios que te ofrecemos.
                </p>
                <hr></hr>
                <div align="center"><img src="http://www.solairamexico.mx/wp-content/uploads/2017/10/metodos-de-pago-solaira-mexico.png"></img></div>
                <hr></hr>
                <b>TARJETA DE CRÉDITO O DÉBITO</b>
                <p>1. Se aceptan tarjetas VISA, Master Card y American Express.<br></br>
                   2. Las medidas de seguridad en la compra las determina tu Banco
                </p>
                <b>PAGO EN EFECTIVO (PAYNET)</b>
                <p>1. Busca tu viaje, selecciona tus asientos, elige el método de pago en efectivo, obtén tu orden pago y paga en más de 5 mil tiendas de conveniencia en todo el país.<br></br>
                   2. No necesitas contar con una tarjeta de débito o crédito para comprar tus boletos de autobús. Selecciona tu viaje, registra tus pasajeros y paga tus boletos en cualquier tienda 7eleven, Circulo K, Farmacias del Ahorro, Farmacias Benavides, Walmart, Sam´s Club, Bodega Aurrera y Superama del país.<br></br>
                   3. Una vez que realices tu pago en cualquiera de las tiendas autorizadas, se validará la transacción y recibirás directamente en tu correo electrónico tus boletos.
                </p>
                <b>PAYPAL</b>
                <p>1. Si ya tienes una cuenta PayPal puedes utilizarla es un servicio de pago seguro donde solo tienes que registrarte en la página de PayPal y una única vez dar tu información financiera, este servicio opera como una especie de cuenta virtual donde puedes recargar el saldo que consideres, quien actúa como intermediario sin necesidad de otorgar información confidencial al negocio donde realizas una compra.<br></br>
                   2. Al comprar a través de la de la página, seleccionas pago PayPal como forma de pago y sólo proporcionas el correo electrónico y contraseña que registraste con PayPal para que se autorice el pago. El dinero se descuenta de la cuenta PayPal y eso es todo, ya se efectuó el pago sin necesidad de brindar tus datos financieros. Cuando se elige la forma de pago PayPal, los derechos y manejo de información son administrados por PayPal.
                </p>
          
               
            </blockquote>
          </div>
        </div>
      </form>
        );
    }
}
export default Cardpago;