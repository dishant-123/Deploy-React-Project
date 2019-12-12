import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            name:''
        }
        this.cbRef=null
        this.setCbRef = element =>{
            this.cbRef=element
        }
        this.inputRef = React.createRef();
        console.log('constructor');
    }
    handleButton = () =>
    {
        alert(this.inputRef.current.value);
        // console.log(this.inputRef);
        console.log('handleButton');
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log('componentDidMount');
        //for callback mount 
        this.cbRef.focus();
    }
    handleInput = (event) =>{
        this.setState ({
            name:event.target.value
        })
    }
    render() {
        console.log('render');
        return (
            <>  
               <input type="text" onChange = {this.handleInput} ref={this.inputRef } /><br></br>
               <input type="text" ref={this.setCbRef}></input>
               <h1>{this.state.name}</h1>
               <button onClick = {this.handleButton}>Click me</button> 
            </>
        )
    }
}

export default Refs
