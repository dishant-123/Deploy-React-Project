import React, { Component } from 'react'
import UpdatedComponent from './withCounter.js'
class ClickHover extends Component {
    render() {
        const {count,increment}= this.props
        return <h1 onMouseOver = {increment}>You! Hover me {count} times</h1>
    }
}

export default UpdatedComponent(ClickHover)
