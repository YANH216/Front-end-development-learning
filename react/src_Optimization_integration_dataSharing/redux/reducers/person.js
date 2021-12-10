import { ADD_PERSON } from '../contant'

const initState = [
    {
        id: '001',
        name: '小黄',
        age: 20
    }
]

export default function personReducer(preState = initState, action) {
    const { type, data } = action

    switch(type){
        case ADD_PERSON:
            return [data, ...preState]
            // 如果这使用unshift或push方法往里面添加数据，由于redux底层比较数组时，只是比较地址，数组操作方法改变数组数据并不会改变数组地址，在redux比较时就会认为和之前数组一样，就不会做出改变
        default:
            return preState
    }
}