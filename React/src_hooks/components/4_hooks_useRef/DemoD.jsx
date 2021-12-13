/* import React, { Component, createRef } from 'react'

export default class DemoD extends Component {

    inputRef = createRef()

    show = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={ this.inputRef } />
                <br/>
                <button onClick={ this.show } >展示input数据</button>
            </div>
        )
    }
}
 */

import React, { useRef } from 'react'

export default function DemoD() {

    const inputRef = useRef()

    function show(){
        alert(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={ inputRef } />
            <br/>
            <button onClick={ show } >展示input数据</button>
        </div>
    )
}


