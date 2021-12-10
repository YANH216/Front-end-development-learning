import { ADD_PERSON } from "../contant"

export const createPersonAction = (personObj) => {
    return({
        type: ADD_PERSON,
        data: personObj
    })
}