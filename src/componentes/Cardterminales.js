import React, { Component } from 'react';
import '../Estilos/estilotexto.css';

class Cardterminales extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="formp">
                <div class="card">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <b>Elige tu destino, paga y disfruta el viaje</b>
                            <p>Ponemos a tu disposicion los medios de transporte que travell center
                            tiene para ti, viaja a tu destino favorito sin tener que preocuparte
                            por conseguir un lugar, compra directamente con nosotros y asegura un
                            viaje tranquilo y comodo en nuestras más de 5 lineas y mas de 30 destinos
                            diferentes.
                            </p>
                            <b>¡Viaja ya!</b>
                        </blockquote>
                        <hr></hr>
                        <div align="center">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Linea</th>
                                        <th scope="col">Destino</th>
                                        <th scope="col">Horario</th>
                                        <th scope="col">Comprar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Transporte pinosuarez</td>
                                        <td>Tenosique</td>
                                        <td>
                                            <form action="../../form-result.php" target="_blank">
                                                <p>
                                                    <select name="deporte">
                                                        <option>12:30 pm</option>
                                                        <option>02:30 pc</option>
                                                        <option>03:30 pm</option>
                                                        <option>05:45 pm</option>
                                                    </select>
                                                </p>
                                            </form>
                                        </td>
                                        <td><input class="btn btn-primary" type="submit" value="Comprar"/></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Transporte el jaguar</td>
                                        <td>Villahermosa</td>
                                        <td>
                                            <form action="../../form-result.php" target="_blank">
                                                <p>
                                                    <select name="deporte">
                                                        <option>12:30 pm</option>
                                                        <option>02:30 pc</option>
                                                        <option>03:30 pm</option>
                                                        <option>05:45 pm</option>
                                                    </select>
                                                </p>
                                            </form>
                                        </td>
                                        <td><input class="btn btn-primary" type="submit" value="Comprar"/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Transporte Zapata</td>
                                        <td>E. Zapata</td>
                                        <td>
                                            <form action="../../form-result.php" target="_blank">
                                                <p>
                                                    <select name="deporte">
                                                        <option>12:30 pm</option>
                                                        <option>02:30 pc</option>
                                                        <option>03:30 pm</option>
                                                        <option>05:45 pm</option>
                                                    </select>
                                                </p>
                                            </form>
                                        </td>
                                        <td><input class="btn btn-primary" type="submit" value="Comprar"/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Transporte palenque</td>
                                        <td>Palenque</td>
                                        <td>
                                            <form action="../../form-result.php" target="_blank">
                                                <p>
                                                    <select name="deporte">
                                                        <option>12:30 pm</option>
                                                        <option>02:30 pc</option>
                                                        <option>03:30 pm</option>
                                                        <option>05:45 pm</option>
                                                    </select>
                                                </p>
                                            </form>
                                        </td>
                                        <td><input class="btn btn-primary" type="submit" value="Comprar"/></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default Cardterminales;