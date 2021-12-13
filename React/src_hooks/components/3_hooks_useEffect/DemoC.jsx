import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

/* export default class DemoC extends Component {
    
    state = {
        num: 0
    }

    add = () => {
        this.setState(
            state => ({ num: state.num + 1 })
        )
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state => ({ num: state.num + 1 }))
        }, 1000);
    }

    componentDidUpdate(){
        console.log(`@`)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    render() {
        return (
            <div>
                <h1>当前数值: { this.state.num } </h1>
                <button onClick={ this.add } >加一</button>
                <button onClick={ this.unmount } >卸载</button>
            </div>
        )
    }
} */


export default function DemoC() {

    const [num, setNum] = useState(0)

    useEffect(() => {

        let timer = setInterval(() => {
            setNum(num => num + 1)
        }, 1000);

        return (
            () => {
                clearInterval(timer)
            }
        ) 
// 是否有返回函数的return表示是否开启componentWillUnmount,return 中的函数会在组件将要卸载之前执行
    }, []) 
// []决定是否使用类组件中componentDidUpdate(相同的效果),不加[] 表示全局监测,加[]不设置其中的值表示谁都不监测，相当于关闭componentDidUpdate,整个useEffect相当于是componentDidMount,设置值,设置哪个便监测哪个

    function add(){
        setNum(num => num + 1)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <h1>当前数值: { num } </h1>
            <button onClick={ add } >加一</button>
            <button onClick={ unmount } >卸载</button>
        </div>
    )
}
