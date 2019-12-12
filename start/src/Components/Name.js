import React, { Component } from 'react'

class Name extends Component {
    
    render() {
        if(this.props.name=="Muskan"){
            throw new Error(`${this.props.name} is not my friend she is my x-girlfriend`)
        }
        return (
            <div>
                <h1>{this.props.name} is my friend</h1>
            </div>
        )
    }
}

export default Name
