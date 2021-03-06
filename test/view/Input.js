'use strict';

const Input = require('../../view/Input');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  clear: 'clear',
  control: 'control',
  wrapper: 'wrapper',
};

test('Input className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Input
    className='mixin'
    name='motorrad'
    styles={styles}/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin wrapper');
  t.end();
});
