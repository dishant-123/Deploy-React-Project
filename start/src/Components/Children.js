    import React, { Component } from 'react'
    import { UserConsumer } from './ContextFile'

    class Children extends Component {
        render() {
            return <div>
                <UserConsumer >
                {
                    (message) => {
                        return <h1>I am from Children Component and i got {message}</h1>
                    }
                }  
                </UserConsumer>
            </div>
        }
    }

    export default Children
