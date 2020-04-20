import React, { Component } from 'react'

export default class FormularioTarea extends Component {
    state = {
        descripcion: '',
        isValid: true
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.descripcion !== '') {
            this.props.agregarTarea(this.state.descripcion);
            this.setState({
                descripcion: '',
                isValid: true
            })
        } else {
            this.setState({
                isValid: false
            })
        }

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        
        return (


            <form onSubmit={this.onSubmit} className="formulario">
                <input 
                    type="text"
                    placeholder="Agregá una tarea" 
                    name="descripcion"
                    onChange={this.onChange} 
                    value= {this.state.descripcion}
                    className= {this.state.isValid ? "formStyle" : "error"}
                     >

                </input>
                <br/>
                <input 
                    type="submit" 
                    className="botonSubmit" 
                    id="agregarTarea" 
                    value="Agregar Tarea"
                />
            </form>
        )
    }
}
