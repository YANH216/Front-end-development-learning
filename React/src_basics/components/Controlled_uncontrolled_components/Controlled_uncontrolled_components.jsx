import React, { Component } from 'react'


// Cauncc(controlled and uncontrolled components)


// 非受控组件  (现用现取)
/* export default class Cauncc extends Component {

    nameInput = (c) => {
        this.username = c
    }

    passwordInput = (c) => {
        this.password = c
    }

    handleSubmit = (event) => {
        event.preventDefault()  // 阻止事件默认行为
        const { username, password } = this
        alert(`用户名：${username.value}, 密码：${password.value}`)
    }

    render() {
        return (
            <form action="" onSubmit= { this.handleSubmit }>
                <input ref= { this.nameInput } type="text" name= "username"/>
                <input ref= { this.passwordInput } type="password" name= "password"/>
                <button>点击显示用户信息</button>
            </form>
        )
    }
} */



// 受控组件 (双向绑定, 数据存储在组件状态中，要用时 从组件状态中获取)
export default class Cauncc extends Component {

    // 初始化state
    state = {
        username: '',
        password: ''
    }


// 保存获取到的节点的状态  
    /* usernameInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    } */

//#region 高阶函数和函数的柯里化
    /* 
        高阶函数：
            1.调用的参数是函数
            2.返回值是函数
        
        函数的柯里化
            通过函数调用继续返回函数的形式，接收多个参数 然后同一处理的代码编写方法
     */
//#endregion

// 使用高阶函数和函数柯里化 简写上面的函数
    saveFromData = (dataType) => {
        return (
            (event) => {
                this.setState({
                    [dataType]: event.target.value
                })
            }
        )
    }




    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state
        alert(`用户名：${username}, 密码：${password}`)
    }

    render() {
        return (
            <form action="" onSubmit= { this.handleSubmit }>
                <input onChange= { this.saveFromData('username') } type="text" name= "username"/>
                <input onChange= { this.saveFromData('password') } type="password" name= "password"/>
                <button>点击显示用户信息</button>
            </form>
        )
    }
}

