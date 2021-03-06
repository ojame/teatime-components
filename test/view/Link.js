'use strict';

const Link = require('../../view/Link');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {control: 'control'};

test('Link className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Link
    className='mixin'
    href='#'
    styles={styles}/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin control');
  t.end();
});
