import React, { Component } from 'react'
import GrandFather from './GrandFather'
class GreatGrandFather extends Component {
    render() {
        return (
            <div>
                <h1>Hey ! I am from GreatGrandFather Component</h1>
                <GrandFather />
            </div>
        )
    }
}

export default GreatGrandFather
