import React, { useState } from 'react'

export default function DemoB() {

    const [number, setNumber] = useState(0)

    function add() {
        setNumber(number + 1)
    }
    
    return (
        <div>
            <h1>当前状态值: { number } </h1>
            <button onClick= { add } >点击加一</button>
        </div>
    )
}
