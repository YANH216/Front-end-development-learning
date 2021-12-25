import { ADD_PERSON } from "../contant";

const initState = [{
    id: '001',
    name: '小明',
    age: 18
}]

export default function person(preState = initState, action){
    const { type, data } = action

    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}