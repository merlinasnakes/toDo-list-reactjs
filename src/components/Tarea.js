import React from 'react';
import checkicon from '../icons/check.svg';
import trashicon from '../icons/trash.svg';


export default class Tarea extends React.Component {
    estiloTareaRealizada() {
        return {
            color: this.props.tarea.realizada ? 'gray' : 'black',
            textDecoration: this.props.tarea.realizada ? 'line-through': 'none'
        }
    }

    render() {
        const {tarea} = this.props;

        return <div style={this.estiloTareaRealizada()}>
            Tarea {tarea.id} - 
            {tarea.descripcion}
            {tarea.realizada}

            <img src={checkicon} className="botonesTarea" onClick= {this.props.checkRealizada.bind(this, tarea.id)} alt="boton-tarearealizada"/>
            <img src={trashicon} className="botonesTarea" onClick={this.props.eliminarTarea.bind(this, tarea.id)} alt= "boton-eliminar"/>
        </div>

    }
}
