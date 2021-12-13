// import React from "react";

/* class Test extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '李四'
    //     }
    // }
    render() {
        return(
            <span>类组件{this.props.name}</span>
        )
    }
}

export default Test; */



/* export default class Test extends Component {

    getInput1 = (c) => {
        this.input1 = c;
    }

    showText = () => {
        const { input1 } = this;
        alert(input1.value);
    }

    render() {
        return (
            <div>
                <input ref = { this.getInput1 } type="text" placeholder="输入内容"/>
                <button onClick = { this.showText }>点击输出</button>
            </div>
        )
    }
} */


import React, { Component, createRef } from 'react'

export default class Test extends Component {

    myRef1 = createRef();

    showText = () => {
        const { current } = this.myRef1;
        alert(current.value);
    }

    render() {
        return (
            <div>
                <input ref = { this.myRef1 } type="text" placeholder="输入内容"/>
                <button onClick = { this.showText }>点击输出</button>
            </div>
        )
    }
}
