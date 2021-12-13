import { ADD_PERSON } from "../contant"

export const addPersons = (personObj) => {
    return({
        type: ADD_PERSON,
        data: personObj
    })
}