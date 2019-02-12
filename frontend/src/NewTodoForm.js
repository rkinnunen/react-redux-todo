import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      todo: ''
    };
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.todo);
    e.target.reset();
    this.props.history.push('/todos');
    }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='todo'
          id='todo'
          onChange={this.handleChange}
        />
    <button type='button'>Add</button>
  </form>
    )
  }
}

export default NewTodoForm;