import React, { Component } from 'react'
import Item from './Item/Item'

import './List.css'
//#region 
/* export default class List extends Component {

    render() {
        const { todos, updataTodo, deleteTodo} = this.props
        return (
            <div className= "List">
                <ul>
                    {
                        todos.map((todo) => {
                            return <Item key= {todo.id} {...todo} updataTodo= {updataTodo} deleteTodo= {deleteTodo} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
 */
//#endregion


export default class List extends Component {
    render() {
        const { todos, updataTodo, deleteTodo } = this.props
        return (
            <div className= "List">
                <ul>
                    {
                        todos.map((todo) => {
                            return(
                                <Item key= {todo.id} {...todo} updataTodo= {updataTodo} deleteTodo= {deleteTodo} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
