import { ADD_PERSON } from "../contant";

export const addPerson = (personObj) => {
    return (
        {
            type: ADD_PERSON,
            data: personObj
        }
    )
}