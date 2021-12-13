import React, { Component } from 'react'

export default class CountUI extends Component {

    countRef = React.createRef()

    // dispatch 传递action对象(type和data)给reducer
    increment = () => {
        const { value } = this.countRef.current
        this.props.Incre(parseInt(value))

    }
    decrement = () => {
        const { value } = this.countRef.current
        this.props.Decre(parseInt(value))
    }

    // getState  获取在redux中保存的状态
    incrementIfOdd = () => {
        const { value } = this.countRef.current
        const { count } = this.props
        if(count % 2 !== 0){
            this.props.Incre(parseInt(value))
        }
    }

    // 异步action
    incrementAsync = () => {
        const { value } = this.countRef.current
        this.props.IncreAsync(parseInt(value), 500)
    }

    render() {
        return (
            <div>
                <h1>计算结果: { this.props.count } </h1>
                <select ref= { this.countRef }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick= { this.increment }>+</button>
                <button onClick= { this.decrement }>-</button>
                <button onClick= { this.incrementIfOdd }>当前计算结果为奇数就加</button>
                <button onClick= { this.incrementAsync }>异步 加</button>
            </div>
        )
    }
}
