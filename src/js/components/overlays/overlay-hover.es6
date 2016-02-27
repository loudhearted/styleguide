import React, {Component, PropTypes} from 'react';

export default class OverlayHover extends Component {
  constructor() {
    super()
    this.state = {isOpen: false}
  }

  classes() {
    let classes = ['relative'];
    return classes.join(' ');
  }

  componentDidMount() {
    document.addEventListener('mouseover', this.handleDocumentHover.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('mouseover', this.handleDocumentHover.bind(this));
  }

  content() {
    if (this.state.isOpen) {
      return React.cloneElement(this.props.content, {closeOverlay: this.hide});
    }
  }

  hide() {
    this.props.onClose();
    this.setState({isOpen: false});
  }

  handleDocumentHover(e) {
    if (React.findDOMNode(this).contains(e.target)) {
      if (!this.state.isOpen) {
        this.show();
      } else {
        this.props.onHover();
      }
    } else {
      this.hide();
    }
  }

  show() {
    this.props.onOpen();
    this.setState({isOpen: true});
  }

  render() {
    return (
      <div className={this.classes()} >
        {this.props.children}
        {this.content()}
      </div>
    );
  }
}

OverlayHover.defaultProps = {
  onHover: function() {},
  onClose: function() {},
  onOpen: function() {}
}

OverlayHover.PropTypes = {
  content: PropTypes.node.isRequired,
  onHover: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}
