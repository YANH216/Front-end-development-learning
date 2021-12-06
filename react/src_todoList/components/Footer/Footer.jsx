import React, { Component } from 'react'

import './Footer.css'
//#region 
/* export default class Footer extends Component {

    handleCheckAll = (event) => {
        return(
            this.props.checkAllTodo(event.target.checked)
        )
    }

    handleClearAllDone = () => {
        if(window.confirm('确定清除所有任务吗')){
            this.props.clearAllDone()
        }else{
            return
        }
    }

    render() {

        const { todos } = this.props;
        const doneCount = todos.reduce((pre, current) => {
            return (
                pre + (current.done ? 1 : 0)
            )
        }, 0)
        const total = todos.length;

        return (
            <div className= "Footer">
                <input type="checkbox" onChange= {this.handleCheckAll} checked= {doneCount === total && total !== 0 ? true : false}/>已完成 {doneCount} / 全部 {total}
                <button onClick= {this.handleClearAllDone} >清除已完成任务</button>
            </div>
        )
    }
} */
//#endregion


export default class Footer extends Component {

    handleCheckAll = ((event) => {
        return this.props.checkAll(event.target.checked)
    })

    handleClearAllBeDone = (() => {
        if(window.confirm('确定删除所有已经完成的任务吗')){
            this.props.clearAllBeDone()
        }else{
            return 
        }
    })

    render() {

        const { todos } = this.props

        const total = todos.length 
      
        const beDone = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        
        const allBeDone = (total === beDone && total !== 0 ? true : false)

        return (
            <div className= "Footer">
                <input type="checkbox" checked= { allBeDone }
                        onChange= { this.handleCheckAll } />已完成 { beDone } / 全部 { total }
                <button onClick= { this.handleClearAllBeDone } >清除已完成任务</button>
            </div>
        )
    }
}
