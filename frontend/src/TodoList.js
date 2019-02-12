import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map((t, i) => 
      <Todo
        key={i}
        todo={t.todo}
        removeTodo={this.removeTodo.bind(this, t.id)}
      />)
    return(
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='todo'
            id='todo'
            onChange={this.handleChange}
          />
          <button type='button'>Add</button>
        </form>
        <div>
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);