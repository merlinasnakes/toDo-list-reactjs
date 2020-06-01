import React from 'react';
import './App.css';
import tareasprueba from "./sample/tareasprueba";
import Tareas from "./components/Tareas"
import FormularioTarea from "./components/FormularioTarea";
import './components/Style.css';


class App extends React.Component {
  state = {
    tareasprueba: tareasprueba
  };

  agregarTarea = (descripcion) => {
    const tareanueva = {
      descripcion: descripcion,
      id: this.state.tareasprueba.length
    };
    

    this.setState({
      tareasprueba: [...this.state.tareasprueba, tareanueva]
    });
  };

  eliminarTarea = id => {
    const tareanueva = this.state.tareasprueba.filter(tarea => tarea.id !== id);
    console.log(tareanueva);
    this.setState({
      tareasprueba: tareanueva
    });
  };

  checkRealizada = id => {
    const tareanueva = this.state.tareasprueba.map(tarea =>{
      if (tarea.id === id) {
        tarea.realizada = !tarea.realizada;
      }
      return tarea;
    });
    this.setState({
      tareasprueba: tareanueva
    });
  };

  render() {
    return (
    <div>  
      <div className="principal">
        <div className="wrap">
        <FormularioTarea agregarTarea={this.agregarTarea} className="formulario"/>
        </div>
      </div>         
      <div className="tareas">
        <div className="wrap"> 
        <ul className="lista">
            <Tareas   
              lista={this.state.tareasprueba}
              eliminarTarea={this.eliminarTarea}
              checkRealizada={this.checkRealizada}
            />
        </ul> 
        </div>
      </div>
    </div>    
    );
  }
}

export default App;

