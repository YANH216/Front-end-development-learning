import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Messages extends Component {

    state = {
        msgList: [
            {
                id: "001",
                title: "MESSAGE 1"
            },
            {
                id: "002",
                title: "MESSAGE 2"
            },
            {
                id: "003",
                title: "MESSAGE 3"
            }
        ]
    }

    render() {
        console.log(`this.props`, this.props)

        const { msgList } = this.state

        return (    
            <>
                <h2>Messages界面</h2>
                <ul>
                    {
                        msgList.map(( msgObj ) => {
                            return (
                                <li key= { msgObj.id } >
                                    <Link to= { `/home/messages/content/${msgObj.id}/${msgObj.title}` } >
                                            { msgObj.title }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
            </>
        )
    }
}
