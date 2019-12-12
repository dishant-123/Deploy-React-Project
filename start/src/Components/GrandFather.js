import React, { Component } from 'react'
import Father from './Father.js'
class GrandFather extends Component {
    render() {
        return (
            <div>
                <h1>Hey ! I am from GrandFather Component {this.props.message}</h1>
                <Father />
            </div>
        )
    }
}

export default GrandFather
