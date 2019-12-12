import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             rollno:'',
             comment:''
        }
    }
    handleName = event => {
        this.setState({
            name:event.target.value
        })
    }
    handleRollno = event => {
        this.setState({
            rollno:event.target.value
        })
    }
    handleComment = event => {
        this.setState({
            comment:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.rollno} ${this.state.comment}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName}></input>
                    </div>
                    <div>
                        <label>Enter Rollno</label>
                        <input type="text" value={this.state.rollno} onChange={this.handleRollno}></input>
                    </div>
                    <div>
                        <label>Leave Comment</label>
                        <textarea type="text" value={this.state.comment}  onChange={this.handleComment}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
