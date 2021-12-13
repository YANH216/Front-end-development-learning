import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'


// react-redux使用Provider组件向容器组件提供store
ReactDOM.render(
    <Provider store= { store } >
        <App />
    </Provider>,

    document.getElementById('root')
)
// react-redux不需要使用store.subscribe监测redux中的状态变化来重新调用render。