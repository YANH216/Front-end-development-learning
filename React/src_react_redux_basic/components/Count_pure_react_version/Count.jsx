import React, { Component } from 'react'

export default class Count extends Component {

    state = {
        count: 0
    }

    countRef = React.createRef()

    increment = () => {
        const { count } = this.state
        const { value } = this.countRef.current
        this.setState({
            count: count + parseInt(value)
        })
    }
    decrement = () => {
        const { count } = this.state
        const { value } = this.countRef.current
        this.setState({
            count: count - parseInt(value)
        })
    }
    incrementIfOdd = () => {
        const { count } = this.state
        const { value } = this.countRef.current
        if( count % 2 !==0 ) {
            this.setState({
                count: count + parseInt(value)
            })
        }
    }
    incrementAsync = () => {
        const { count } = this.state
        const { value } = this.countRef.current
        setTimeout(() => {
            this.setState({
                count: count + parseInt(value)
            })
        }, 500)
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>计算结果: { count }</h1>
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
