import { INCREMENT, DECREMENT } from "../contant";

export const increment = (data) => {
    return (
        {
            type: INCREMENT,
            data: data
        }
    )
}

export const decrement = (data) => {
    return (
        {
            type: DECREMENT,
            data: data
        }
    )
}

export const incrementAsync = (data, time) => {
    return (
        (dispatch) => {
            setTimeout(() => {
                dispatch(increment(data))
            }, time)
        }
    )
}