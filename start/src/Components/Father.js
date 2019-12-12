import React, { Component } from 'react'
import Children from './Children.js'
class Father extends Component {
    render() {
        return (
            <div>
                <h1>Hey ! I am from Father Component.</h1>
                <Children />
            </div>
        )
    }
}

export default Father
