import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'

import { addPerson } from '../../redux/actions/person'

export function Person(props) {

    const inputName = useRef(null)
    const inputAge = useRef(null)

    const addPerson = () => {
        const name = inputName.current.value
        const age = inputAge.current.value
        const id = nanoid()

        const personObj = {id, name, age}
        props.addPerson(personObj)
        
        inputName.current.value = ''
        inputAge.current.value = ''
    }

    return ( 
        <div>
            <h1>Person组件</h1>
            <h2>
                <span>人数: {props.person.length} </span>
                <span>上方组件结果: {props.count}</span>
            </h2>
            <input type="text" ref={inputName} placeholder='输入名字'/>
            <input type="text" ref={inputAge} placeholder='输入年龄'/>
            <button onClick={addPerson} >添加</button>
            <ul>
                {
                    props.person.map((person) => {
                        return <li key={person.id}>姓名: {person.name}  年龄: {person.age}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(
    (state) => ({
        person: state.person,
        count: state.count
    }),{
        addPerson
    }
)(Person)
