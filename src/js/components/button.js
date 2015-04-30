import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Button",

  propTypes: {
   type: Type.oneOf([null, 'danger', 'secondary']),
   label: Type.string,
   size: Type.oneOf([null, 'sm']),
   disabled: Type.bool
  },

  getDefaultProps: function() {
    return {
      type: null,
      size: null,
      disabled: false
    };
  },

  createClass: function(value) {
    return "button-" + value;
  },

  classes: function() {
    var classes = []

    if (this.props.type) {
      classes.push(this.createClass(this.props.type))
    }

    if (this.props.size) {
      classes.push(this.createClass(this.props.size))
    }

    return classes.join(' ')
  },

  render() {
    return <button className={ this.classes() } disabled={ this.props.disabled }>{ this.props.label }</button>;
  }
});
