'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const React = require('react');
const cssModules = require('react-css-modules');

class Textarea extends Component {
  constructor(props) {
    super(props);

    bind(this, 'onChange');
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  onChange(e) {
    this.props.onChange(e, {value: e.target.value});
  }

  select() {
    if (this.refs.control) {
      this.refs.control.select();
    }
  }

  render() {
    return (
      <textarea
        styleName='control'
        {...this.props}
        onChange={this.onChange}
        ref='control'/>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  rows: 3,
  styles: {},
};

Textarea.propTypes = {
  cols: PropTypes.number,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onPaste: PropTypes.func,
  onScroll: PropTypes.func,
  onSelect: PropTypes.func,
  onWheel: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = cssModules(Textarea);