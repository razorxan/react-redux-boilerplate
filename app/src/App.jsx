import React, {Component} from 'react'
import {render} from 'react-dom'
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Home from './components/Home'
import Todo from './components/Todo'
import About from './components/About'
import './assets/css/main.css'
//import {} from './styles/global.css'
const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}


@withRouter
@connect(mapStateToProps)
export default class App extends Component {

    constructor (props)
    {
        super(props)
    }
	

    render ()
    {
        return (
            <main>
                <h1>React Redux Boilerplate</h1>
                <div>Current todos: {this.props.todo.length}, {this.props.todo.filter(todo => todo.checked).length} are done, {this.props.todo.filter(todo => !todo.checked).length} are still unchecked</div>
                <nav>
                    <Link to="/">Home</Link><br />
                    <Link to="/todo">Todo</Link><br />
                    <Link to="/about">About</Link><br />
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/todo" component={Todo} />
                <Route path="/about" component={About} />
            </main>
        )
    }
}
