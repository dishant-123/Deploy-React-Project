import React,{Component} from 'react';
class Student extends Component{
    render(){
        return <div>
            <h1>{`name = ${this.props.studentDetails.name}  rollno = ${this.props.studentDetails.rollno}`}</h1>
        </div>
    }
}
export default Student;