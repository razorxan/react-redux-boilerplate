import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo: actions.addTodo,
        removeTodo: actions.removeTodo,
        setTodo: actions.setTodo,
        removeTodoAsync: actions.removeTodoAsync
    }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Todo extends Component
{

    constructor (props)
    {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    renderTodos ()
    {
        return this.props.todo.map(todo => {
            return (
                <div key={todo.id}>
                    <input type="checkbox" onChange={this.checkTodo.bind(this, todo.id)} defaultChecked={todo.checked} />
                    <span>{todo.title} </span>
                    <button onClick={this.removeTodo.bind(this, todo.id)}>x</button>
                    <button onClick={this.removeTodoAsync.bind(this, todo.id)}>Delete async</button>
                </div>
            )
        })
    }

    checkTodo (id, e)
    {
        this.props.setTodo({
            id,
            checked: e.target.checked
        })
    }

    removeTodoAsync (id)
    {
        this.props.removeTodoAsync(id)
    }

    removeTodo (id)
    {
        this.props.removeTodo(id)
    }

    addTodo ()
    {
        if (this.state.inputValue.trim() === '') return
        this.props.addTodo({
            id: Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36),
            title: this.state.inputValue,
            checked: false
        })
        this.setState({
            inputValue: ''
        })
    }

    handleInputChange (e)
    {
        this.setState({
            inputValue: e.target.value
        })
    }

    render ()
    {
        return (
            <div>
                <h2>Todo Page</h2>
                <div>{this.renderTodos()}</div>
                <input placeholder="Add Todo" onKeyUp={e => {if (e.which === 13) this.addTodo()}} value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add</button>
            </div>
        )
    }

}