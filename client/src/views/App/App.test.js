import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import renderer from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })


describe('App', () => {
 it('should be defined', () => {
   expect(App).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <App />
   );
   expect(tree).toMatchSnapshot();
 });
});

it('sums numbers', () => {
  let sum = (a,b) => a + b;
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
