import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LifeCycle extends Component {

    state = {
        opacity: 1
    }

    // 卸载组件
    clearComponent = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 组件挂载完毕之后执行
    componentDidMount() {
        this.timer = setInterval(() => {
            let { opacity } = this.state

            opacity -= 0.1

            if(opacity <= 0){
                opacity = 1
            }

            this.setState({
                opacity   // 将对象的某个属性的值赋给该属性本身 可只写属性名
            }) 
        }, 200)
    }

    // 组件将要被卸载时执行
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    render() {
        return (
            <div>
                <h1 style= {{ opacity: this.state.opacity }}>透明度由一到零再到一</h1>
                <button onClick= { this.clearComponent }>卸载组件</button>
            </div>
        )
    }
}
