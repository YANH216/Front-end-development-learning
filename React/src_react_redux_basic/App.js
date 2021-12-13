import React, { Component } from 'react'
// import Count from './components/Count_pure_version/Count'  // 纯react版 Count

// import Count from './components/Count_full_redux_version/Count' // 完整版redux Count

// import Count from './components/Count_async_redux_version/Count' // 异步action Count

import Count from './containers/Count/Count'  // react-redux版 Count

// react-redux中不需要容器组件的父组件通过props方式传递store链接容器组件和store，直接在index中使用Provider组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
            </div>
        )
    }
}
