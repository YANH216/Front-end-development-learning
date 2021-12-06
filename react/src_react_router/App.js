import React, { Component } from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Messages from './component/Home/Messages/Messages'
import News from './component/Home/News/News'
import Content from './component/Home/Messages/Content/Content'

import './bootstrap/dist/css/bootstrap.css'


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-md-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to= "/home" >Home</NavLink>
                            <NavLink className="list-group-item" to= "/about" >About</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Routes>
                                    <Route path="home/*" element= { <Home /> } >
                                        <Route path= "news" element= { <News /> } />
                                        <Route path= "messages" element= { <Messages /> } >
                                            <Route path= "content/:id/:title" element= { <Content /> } />
                                        </Route>
                                    </Route>
                                    <Route path="about" element= { <About /> } />
                                    <Route path="*" element={ <Navigate to= "/home/news" /> } />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
