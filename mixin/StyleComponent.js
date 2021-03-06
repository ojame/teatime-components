'use strict';

const React = require('react');
const { Component } = React;

/**
 * @param  {component} Target
 * @param  {function} getter
 * @param  {object} styles
 * @param  {object} defaults defaultProps
 * @param  {object} types propTypes
 * @return {component}
 */
module.exports = function StyleComponent(Target, getter, styles, defaults, types) {
  class Simplified extends Component {
    render() {
      return (
        <Target {...this.props} {...getter(styles, this.props)}/>
      );
    }
  }

  Simplified.displayName = `Styled${Target.displayName || 'Component'}`;
  Simplified.defaultProps = defaults;
  Simplified.propTypes = types;

  return Simplified;
};
