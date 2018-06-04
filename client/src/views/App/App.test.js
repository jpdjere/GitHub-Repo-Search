import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

import renderer from 'react-test-renderer';

describe('App', () => {

 it('should be defined', () => {
   expect(App).toBeDefined();
 });

 it('should match the snapshot', () => {
   // const tree = renderer.create(<App />).toJSON();
   const tree = shallow(<App />);
   expect(tree).toMatchSnapshot();
 });

});

it('sums numbers', () => {
  let sum = (a,b) => a + b;
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
