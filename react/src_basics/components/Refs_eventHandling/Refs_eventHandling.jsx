import React, { Component } from 'react'

class MyRefs extends Component {

    // 回调函数写在标签内部

    /* showText = () => {
        const { input1 } = this;
        alert(input1.value);
    } */

    // 回调函数写在标签外部
    /* getInput = (c) => {
        this.input1 = c;
    }

    showText = () => {
        const { input1 } = this;
        alert(input1.value);
    } */

    // createRef
    myRef = React.createRef();
    
    showText = () => {
        const { current } = this.myRef;
        alert(current.value);
    }
    render() {
        return(
            <div>
                {/* <input ref = { (c) => { this.input1 = c } } type="text" /> 回调函数写在标签内部 c : currentNode*/}

                {/* <input ref = { this.getInput } type="text" /> 回调函数写在标签外部 */}

                <input ref = { this.myRef } type="text" />  {/* createRef */}

                <button onClick = { this.showText }>展示文本框中内容</button>
            </div>
        )
    }
}

export default MyRefs;