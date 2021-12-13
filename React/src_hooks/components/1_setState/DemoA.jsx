import React, { Component } from 'react'

export default class DemoA extends Component {

    state = {
        value: 0
    }


    // setState 是同步方法,但是异步操作，详情见README文档
    // 对象式的setState可传第二参数(可选参数且为回调函数)
    add = () => {
        const { value } = this.state
        this.setState(
            { value: value + 1 }, 
            () => {
                console.log(`value1`, this.state.value)
            }
        )

        console.log(`value2`, this.state.value)  // 由于setState是异步操作，此时value还没改变
    }

    // 函数式setState
    /* add = () => {
        this.setState(
            (state) => {
                return { value: state.value +1 }
            }
        )
    } */

    render() {
        return (
            <div>
                <h1>当前状态值: { this.state.value } </h1>
                <button onClick={ this.add } >点击加一</button>
            </div>
        )
    }
}
