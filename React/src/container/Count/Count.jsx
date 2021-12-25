import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

export function Count(props) {
    const sel = useRef(null)
    
    const increment = () => {
        const { value } = sel.current
        props.increment(parseInt(value))
    }

    const decrement = () => {
        const { value } = sel.current
        props.decrement(parseInt(value))
    }

    const incrementIfOdd = () => {
        const { value } = sel.current
        if(props.count % 2 !== 0){
            props.increment(parseInt(value))
        }
    }

    const incrementAsync = () => {
        const { value } = sel.current
        props.incrementAsync(parseInt(value), 500)
    }

    return (
        <div>
            <h1>Count组件</h1>
            <h2>
                <span>结果: {props.count} </span>
                <span>下方组件人数: {props.person.length} </span>
            </h2>
            <select ref={sel} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick= {increment} >+</button>
            <button onClick= {decrement} >-</button>
            <button onClick= {incrementIfOdd} >结果为奇数 加</button>
            <button onClick= {incrementAsync} >异步 加</button>
        </div>
    )
}


export default connect(
    (state) => ({
        count: state.count,
        person: state.person
    }),{
        increment,
        decrement,
        incrementAsync
    }
)(Count)