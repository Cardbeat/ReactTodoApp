var React = require('react');
require('./css/additem.css')


var Additem = React.createClass({
  render: function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit me" />
      </form>
    )
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }

});



module.exports = Additem;
