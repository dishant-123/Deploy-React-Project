import React, { Component } from 'react'
import UpdatedComponent from './withCounter.js'
class ClickCounter extends Component {
    
    render() {
        const {count,increment}= this.props
        return <button onClick = {increment}>You! Click me {count} times</button>
    }
}

export default UpdatedComponent(ClickCounter)
