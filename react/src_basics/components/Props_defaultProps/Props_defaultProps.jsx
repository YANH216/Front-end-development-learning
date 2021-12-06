import React, { Component } from "react";
/* 
    // props 传值
    function Welcome(props) {
        return (
            <>
                <h1>Welcome, {props.name}</h1>
            </>
        )
    }

    Welcome.defaultProps = {
        name: 'yh'
    }//设置props默认值
 */

// 批量传递props (批量传递标签属性)

class Welcome extends Component {
    render() {
        const { name, age, sex } = this.props;
        return (
            <ul>
                <li>{ name }</li>
                <li>{ age }</li>
                <li>{ sex }</li>
            </ul>
        )
    }
}


export default Welcome;