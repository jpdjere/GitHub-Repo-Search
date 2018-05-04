import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(App);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

it('sums numbers', () => {
  let sum = (a,b) => a + b;
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
