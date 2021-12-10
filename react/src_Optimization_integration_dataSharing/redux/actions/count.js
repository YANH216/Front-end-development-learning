import { INCREMENT, DECREMENT } from "../contant"

export const createIncrementAction = (data) => {
    return(
        {
            type: INCREMENT,
            data: data
        }
    )
}

export const createDecrementAction = (data) => {
    return(
        {
            type: DECREMENT,
            data: data
        }
    )
}

export const createAsyncIncrementAction = (data, time) => {
    return((dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    })
}

