import React, { Component } from 'react';

import Home from './componentes/inicio/Header';
import Footer from './componentes/inicio/Footer';
import Alert from './componentes/Alert';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

        <Alert />
        <Home />

        <hr>
      
        </hr>
        <Footer />
      </div>

    );
  }
}
export default App;