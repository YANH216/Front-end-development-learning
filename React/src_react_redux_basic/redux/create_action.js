// 该文件用于创建action对象

import {INCREMENT, DECREMENT} from './constant'

/* export function createIncrementAction(data){
    return (
        {
            type: 'increment',
            data: data
        }
    )
}

export function createDecrementAction(data){
    return (
        {
            type: 'decrement',
            data: data
        }
    )
} */

export const createIncrementAction = (data) => {
    return (
        {
            type: INCREMENT,
            data: data
        }
    )
}

export const createDecrementAction = (data) => {
    return (
        {
            type: DECREMENT,
            data: data
        }
    )
}


// 创建异步action 不是必须
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}