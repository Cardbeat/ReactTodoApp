var React = require('react');

//CSS requires
require('./css/todoitem.css');

var TodoItem = React.createClass ({
  render: function() {
    return (
      <li>
        <div className="todo-item">
        <span className="item-name">{this.props.item}</span>
        <span className="item-remove" onClick={this.handleDelete}><button>x</button></span>
        </div>
      </li>
    );
  },
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});


module.exports = TodoItem;
