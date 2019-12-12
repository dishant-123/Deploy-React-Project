/*class on karva...*/

// class Title{
//     render(){
//         return<h1>this.props.description</h1>
//     }
// }
// export default Title;
/**1 november 2019 */

// import React,{Component} from 'react';
// import {Link} from "react-router-dom";
// export default class Title extends Component
// {
//     render()
//     {
//         return <div><p>Welcome To Library of Chitkara University</p>
//         <Link to="homepage" >GO TO HOMEPAGE</Link></div>
//     }
// }
import React, { Component } from 'react'
import NavigationBar from './NavigationBar.js'
import Logout from './LogoutPage'
 class title extends Component {
    render() {
        console.log(this.props.location.props)
        console.log(this.props.location.props1)
        return (
            <div>
                <h4>This is Main Page</h4>
                <NavigationBar/>
                 {
                     this.props.location.props?
                     (
                            <h6>logged in</h6>
                     ):
                     (
                            <h6>logout</h6>
                     )
                 }
                 <Logout />
                 {
                     this.props.location.props1?
                     (
                            <h5>logout</h5>
                     ):
                     (
                            <h5>loggin</h5>
                     )
                 }
         
            </div>
        )
    }
}

export default title
