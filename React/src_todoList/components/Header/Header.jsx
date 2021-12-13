import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './Header.css'
//#region 
/* export default class Header extends Component {

    handleKeyUP = (event) => {
        const { target, keyCode } = event;
        if(keyCode !== 13){
            return;
        }
        if(target.value.trim() === ''){
            alert('输入不能为空');
            return;
        }

        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }

        this.props.addTodo(todoObj);

        target.value = '';
    }

    render() {
        return (
            <div className= "Header">
                <input onKeyUp= {this.handleKeyUP} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
 */
//#endregion


export default class Header extends Component {

    handleKeyUp = (event) => {
        const { target, keyCode } = event

        if(keyCode !== 13){
            return ;
        }

        if(target.value.trim() === ''){
            alert('不能为空');
            return ;
        }

        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }

        this.props.addTodo(todoObj);

        target.value = '';

    }

    render() {
        return (
            <div className= "Header">
                <input onKeyUp= {this.handleKeyUp} type="text" placeholder= "请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
