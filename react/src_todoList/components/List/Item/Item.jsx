import React, { Component } from 'react'

import './Item.css'
//#region 
/* export default class Item extends Component {

    state = {
        mouseEnter: false
    }

    handleMouse = (flag) => {
        return (
            () => {
                this.setState({
                    mouseEnter: flag
                })
            }
        )
    }

    handleCheck = (id) => {
        return(
            (event) => {
                const { checked } = event.target;
                this.props.updataTodo(id, checked);
            }
        )
    }

    handleDelete = (id) => {
        return (
            () => {
                if(window.confirm('确定删除吗')){                  
                    this.props.deleteTodo(id)
                }
            }
        )
    }

    render() {
        const {id, name, done} = this.props
        const { mouseEnter } = this.state
        return (
            <div className= "Item">
                    <li onMouseEnter= { this.handleMouse(true) } 
                        onMouseLeave= { this.handleMouse(false) }
                        style= {{ backgroundColor: mouseEnter ? 'grey' : 'white' }}>
                        <input onChange= {this.handleCheck(id)}  type="checkbox" checked= { done }/>
                        <span>{ name }</span>
                        <button onClick= {this.handleDelete(id)} style= {{ display : mouseEnter ? 'block' : 'none' }}>删除</button>
                    </li>
            </div>
        )
    }
} */
//#endregion


export default class Item extends Component {

    state = {
        mouseEnter: false
    }

    handleMouseEnter = (isTrue) => {
        return(
            () => {
                this.setState({
                    mouseEnter: isTrue
                })
            }
        )
    }

    handleChange = (id) => {
        return(
            (event) => {
                const { checked } = event.target
                this.props.updataTodo(id, checked)
            }
        )
    }

    handleDelete = (id) => {
        return (
            () => {
                if(window.confirm('确定删除?')){
                    this.props.deleteTodo(id)
                }   
            }
        )
    }

    render() {
        const { mouseEnter } = this.state
        const { id, name, done } = this.props
        return (
            <div className= "Item">
                <li onMouseEnter= { this.handleMouseEnter(true) } 
                    onMouseLeave= { this.handleMouseEnter(false) } 
                    style= {{ backgroundColor: mouseEnter ? 'grey' : 'white' }}>

                    <input type="checkbox" 
                            onChange= { this.handleChange(id) } 
                            checked= { done } />

                    <span>
                        { name }
                    </span>

                    <button style= {{ display: mouseEnter ? 'block' : 'none' }} 
                            onClick= { this.handleDelete(id) }>删除
                    </button>
                </li>
            </div>
        )
    }
}
