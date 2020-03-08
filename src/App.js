import React, { Component } from 'react';

import Home from './componentes/inicio/Header';
import Footer from './componentes/inicio/Footer';

class App extends Component {
  render(){
    return(

     <div className="App container-fluid">
     <Home/>
     <Footer/>
     </div>
  
    );
  }
}
export default App;
