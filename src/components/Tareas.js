import React, { Component } from 'react'
import Tarea from "./Tarea"

export default class Tareas extends Component {
    render() {
        return this.props.lista.map(tarea =>  
        <Tarea
            tarea={tarea}
            key={tarea.id}
            eliminarTarea={this.props.eliminarTarea}
            checkRealizada={this.props.checkRealizada}
        />)
    }
}
