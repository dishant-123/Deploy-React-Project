    import React,{ Component } from 'react';

    class Display extends Component 
    {
        constructor()
        {
            super();
            this.remove = this.remove.bind(this);
            this.state = {
                bookList : []                                      }
        }
        
        componentDidMount(){
            console.log('component is mount');
            fetch('http://localhost:3000/bookList')
            .then(res =>res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    bookList : res
                })
            })
        }

        remove(removePost)    
        {
            this.setState(state => ({
            bookList: this.state.bookList.filter(bookList => bookList.name !== removePost)
            }));
        }
    add()
    {
        const a={'name':document.getElementById("s").value,
        'author': document.getElementById("s1").value};
        this.setState({
            bookList: [ ...this.state.bookList, {
                'name':document.getElementById("s").value,
                'author': document.getElementById("s1").value
            }],
        });
        fetch('http://localhost:3000/bookList',{
            method:"POST",
            headers:{"Content-Type":"application/json"}
            ,body:JSON.stringify(a)}).then(res =>res.json())
            
    }

        render()
        {
            console.log('render');
            return <table >
                <thead >
                    <tr>
                        <th>Book Name</th>
                        <th>Book Author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.bookList.map(book => {
                        return <tr>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td> <button style={{color:"purple"}}onClick={() => this.remove(book.name)}>Delete</button></td>
                        </tr>
                    })}
                    <tr>
                        <td><input id="s"></input></td>
                        <td><input id="s1"></input></td>
                        <td> <button onClick={() => this.add()}>ADD</button></td>
                    </tr>
                </tbody>
            </table>
        }
    }

    export default Display;