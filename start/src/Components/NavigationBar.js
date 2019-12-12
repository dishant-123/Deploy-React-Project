import React, { Component } from 'react'
// import Title from './title.js'
import {Redirect} from 'react-router-dom';
 class NavigationBar extends Component {
     constructor(props) {
         super(props)
         this.state = {
             loggin : false
         }
         this.handleClick = this.handleClick.bind(this);
     }

     handleClick =()=>{
         this.setState({
             loggin : true
         })
     }
    render() {
        return (
            <div>
                
                {
                this.state.loggin ?
                (
                    <Redirect to = {{
                        pathname : '/',
                        props : this.state.loggin
                    }}/>
                )
                :
                (
                    <React.Fragment >
                        <p>this is navigation bar for loggin</p>
                        <button onClick = {this.handleClick}>Loggin</button>
                    </React.Fragment>
                )
                }
            </div>
        )
    }
}

export default NavigationBar
