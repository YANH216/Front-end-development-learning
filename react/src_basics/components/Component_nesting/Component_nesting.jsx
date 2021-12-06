import React from "react";
import './style.css';  //外联样式



/* const styles = {
    fontSize: '50px',
    color: 'green'

} */  // 内联样式

class Header extends React.Component {
    render() {
        return (
            <h1 className="font">Hello React!!!</h1>  //外联css样式
            // <h1 style= {{fontSize:'50px',color:'red'}}>Hello React!!!</h1>  //行内样式

            // <h1 style={styles}>Hello React!!!</h1> //内联样式
        )
    }
}

class  Content extends React.Component {
    render() {
        return (
            <h1>你好 React!!!</h1>
        )
    }
}

class CompNest extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <Content></Content>
            </>
        )
    }
}


export default CompNest;