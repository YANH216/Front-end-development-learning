import React, { Component } from 'react'
import { createRef } from 'react'
import { connect } from 'react-redux'
import { addPersons } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {

    nameInputNode = createRef()
    ageInputNode = createRef()

    addPersons = () => {
        const name = this.nameInputNode.current.value
        const age = parseInt(this.ageInputNode.current.value)
        const personObj = { id: nanoid(), name, age }
        this.props.addPersons(personObj)
        this.nameInputNode.current.value = ''
        this.ageInputNode.current.value = ''
    }

    render() {
        const { person } = this.props
        return (
            <div>
                <h1>Person组件</h1>
                <h2>上方组件结果 { this.props.count } </h2>
                <input ref= { this.nameInputNode } type="text" placeholder= "输入姓名" />
                <input ref= { this.ageInputNode } type="text" placeholder= "输入年龄" />
                <button onClick= { this.addPersons } >添加</button>
                <ul>
                    {
                        person.map((person) => {
                            return <li key= { person.id } >姓名：{ person.name } 年龄：{ person.age } </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ person: state.person, count: state.count }),
    {
        addPersons
    }
)(Person)
