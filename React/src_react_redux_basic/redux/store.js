// 该文件用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 引入中间件
import thunk from 'redux-thunk'

// 传入为Count组件服务的reducer并暴露store
export default createStore(countReducer, applyMiddleware(thunk))
