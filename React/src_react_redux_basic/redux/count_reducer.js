/* 
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别是之前的状态(preState)和动作对象(action)
 */

import {INCREMENT, DECREMENT} from './constant'

// 初始化之前状态
const initState = 0
export default function count_reducer(preState = initState, action) {
    // action对象中包含type和data，将其从action对象中解构出来
    const { type, data } = action

    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
// reducer是一个纯函数，只需要做最基本的事

