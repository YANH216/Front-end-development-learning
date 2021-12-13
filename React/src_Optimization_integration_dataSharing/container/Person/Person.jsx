import React, { Component } from 'react'
import { createRef } from 'react'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {

    nameInputNode = createRef()
    ageInputNode = createRef()

    addPersons = () => {
        const name = this.nameInputNode.current.value
        const age = parseInt(this.ageInputNode.current.value)
        const personObj = { id: nanoid(), name, age }
        this.props.add(personObj)
        this.nameInputNode.current.value = ''
        this.ageInputNode.current.value = ''
    }

    render() {
        const { personObj } = this.props
        return (
            <div>
                <h1>Person组件</h1>
                <h2>上方组件结果 { this.props.count } </h2>
                <input ref= { this.nameInputNode } type="text" placeholder= "输入姓名" />
                <input ref= { this.ageInputNode } type="text" placeholder= "输入年龄" />
                <button onClick= { this.addPersons } >添加</button>
                <ul>
                    {
                        personObj.map((person) => {
                            return <li key= { person.id } >姓名：{ person.name } 年龄：{ person.age } </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return({
            personObj: state.person,
            count: state.count
        })
    },
    {
        add: createPersonAction
    }
)(Person)
