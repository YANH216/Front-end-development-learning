import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

import './App.css'

//#region 
/* export default class App extends Component {
    state = {
        todos: [
            {
                id: '01',
                name: '吃饭',
                done: true
            },
            {
                id: '02',
                name: '睡觉',
                done: false
            }
        ]
    }

    addTodo = (todoObj) => {
        const { todos } = this.state;

        const newTodos = [todoObj, ...todos];

        this.setState({
            todos: newTodos
        })
    }

    updataTodo = (id, done) => {
        const { todos } = this.state;

        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id){
                return {...todoObj, done: done};
            }else{
                return todoObj;
            }
        })

        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const { todos } = this.state;

        const newTodos = todos.filter((todoObj) => {
            return (
                todoObj.id !== id
            )
        })

        this.setState({
            todos: newTodos
        })
    }

    checkAllTodo = (doneAll) => {
        const { todos } = this.state;

        const newTodos = todos.map((todoObj) => {
            return (
                {...todoObj, done: doneAll}
            )
        })

        this.setState({
            todos: newTodos
        })
    }

    clearAllDone = () => {
        const { todos } = this.state;

        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state;
        return (
            <div className= "App">
                <Header addTodo= {this.addTodo} />
                <List todos= {todos} updataTodo= {this.updataTodo} deleteTodo= {this.deleteTodo} />
                <Footer todos= {todos} checkAllTodo= {this.checkAllTodo} clearAllDone= {this.clearAllDone} />
            </div>
        )
    }
}
 */
//#endregion


export default class App extends Component {

    state = {
        todos: [
            {
                id: '01',
                name: '吃饭',
                done: true
            },
            {
                id: '02',
                name: '睡觉',
                done: false
            }
        ]
    }

    addTodo = (todoObj) => {

        const { todos } = this.state

        const newTodos = [todoObj, ...todos] 

        this.setState({
            todos: newTodos
        })
    }

    updataTodo = (id, done) => {
        const { todos } = this.state

        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id){
                return (
                    { ...todoObj, done: done }
                )
            }else{
                return (
                    { ...todoObj }
                )
            }
        })

        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const { todos } = this.state

        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })

        this.setState({
            todos: newTodos
        })
    }

    checkAll = (allChecked) => {
        const { todos } = this.state

        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done: allChecked }
        })

        this.setState({
            todos: newTodos
        })
    }

    clearAllBeDone = () => {

        const { todos } = this.state

        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className= "App">
                <Header addTodo= { this.addTodo } />
                <List todos= { todos } 
                      updataTodo= { this.updataTodo } 
                      deleteTodo= { this.deleteTodo } />
                <Footer todos= { todos } checkAll= { this.checkAll } clearAllBeDone= { this.clearAllBeDone } />
            </div>
        )
    }
}
