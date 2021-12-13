import React, { Component } from 'react'
import { Outlet, NavLink, Route, Routes } from 'react-router-dom'
import Content from './Messages/Content/Content'

export default class Home extends Component {
    render() {
        return (
            <>  
                <h1>Home界面</h1>
                <ul className= "nav nav-tabs">
                    <li>
                        <NavLink className= "list-group-item" to= "/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className= "list-group-item" to= "/home/messages">Messages</NavLink>
                    </li>
                </ul>
                <Outlet />

                <Routes>
                    <Route path= "/messages/content/:id/:title" element= { <Content /> } />
                </Routes>
            </>
        )
    }
}
