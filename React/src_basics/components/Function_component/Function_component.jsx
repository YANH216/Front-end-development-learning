import React from "react";


const FuncComp = (props) => {
    let { title } = props;
    return <h1>Hello React { title }</h1>
} 


// React 元素首字母小写  React组件首字母大写
export default FuncComp;