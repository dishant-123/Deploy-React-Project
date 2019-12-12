import React,{Component}  from 'react'
// const Greet = props => {
//             return (
//                 <div>
//                     {props.children}
//                     <h1>{props.name}</h1>
//                     <h1>{props.rollno}</h1>
//                 </div>
//             )
//     }
// export default Greet
// class Greet extends Component{
//     constructor(){
//         super()
//         this.state= {
//             message: 'My name is  = '
//         }
//     }
//     changeMessage(){
//         this.setState(
//             { 
//                 message: 'Dishant'
//             }
//         )
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick = {() => this.changeMessage()}>Click me for name</button>
//             </div>
//         )
//     }
// }
/*increment variable by 1 every times user click a button.*/

// class Greet extends Component{
//     constructor(){
//         super()
//         this.state= {
//             count : 1
//         }
//     }
//     IncrementCount(){
//         // this.setState(
//         //     { 
//         //         count:this.state.count+1
//         //     }
//         // )
//         this.setState(
//             prevState =>({
//                 count:prevState.count + 1
//             })
//         )
//     }
//     add(){
//         this.IncrementCount()//ek hi method mal leta h sabhi sam e methods calls ko.
//         this.IncrementCount()
//         this.IncrementCount()
//     }
//     render(){
//         return (
//             <div>
//                 <div>count : {this.state.count}</div>
//                 <button onClick = {() => this.add()}>Increment Count</button>
//             </div>
//         )
//     }
// }
// export default Greet
/*change buttoncontent on click*/
// class Greet extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             toggleButton:'True'
//         }
//         this.changeButtonContent=this.changeButtonContent.bind(this);
//     }
//     changeButtonContent(){
//         this.setState(
//             {
//                 toggleButton :!this.state.toggleButton
//             }
//         )
//     }
//     render(){
//         return(
//             <div>   
//                 <h1>{` Click me Please!!`}</h1>
//                 <button onClick={this.changeButtonContent} onMouseLeave={()=>this.props.callAlert('Dishant Dua')}>{this.state.toggleButton ? 'On':'Off'}</button>
//             </div>
//         )
//     }
// }
/*randering list and keys in list of object*/

// import Student from './student.js'
// class Greet extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             arr:[
//                 {
//                     name:'dishant',
//                     rollno:'1231'
//                 },
//                 {
//                     name:'devik',
//                     rollno:'1217'
//                 },
//             ]
//         }
//     }
//     render(){
//         return <div>
//             {
//                 this.state.arr.map(item => 
//                 //<h1>{`Name = ${item.name}   Rollno = ${item.rollno}`}</h1>)
//                 <Student key={item.rollno} studentDetails={item}/>)
//             }
//         </div>
//     }
// }
// export default Greet
/*css implementation*/
class Greet extends Component{
    render(){
        return(
            <div>
                <h1 className="mainContent">I am from Greet Component</h1>
            </div>
        )
    }
} 
export default Greet