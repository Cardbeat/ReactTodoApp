var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory} from 'react-router';

// Module requires
var TodoItem = require('./todoitem')
var Additem = require('./additem');


var App = React.createClass({
  render: function () {
    return (
      <Router history={browserHistory
        }>
        <Route path={'/'} component={TodoComponent}></Route>
      </Router>
    );
  }
});




//CSS requires
require('./css/index.css');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
        todos: []
    }
  },

  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        < TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));


    return(
      <div id="todo-list">
      <p>List of items:</p>
        <ul>{todos}</ul>
        < Additem onAdd={this.onAdd} />
      </div>
    );
  },

  // events

  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },


  // lifecycle functions

  componentDidMount: function() {

  }
});

// render component into html page
ReactDOM.render(< App />, document.getElementById('todo-wrapper'));
