import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })


describe('Header', () => {

 it('should be defined', () => {
   expect(Header).toBeDefined();
 });

 it('should match the snapshot', () => {
   // const tree = renderer.create(<App />).toJSON();
   const tree = renderer.create(<Header />).toJSON();
   expect(tree).toMatchSnapshot();
 });

 it('should match the snapshot', () => {
   // const tree = renderer.create(<App />).toJSON();
   const wrapper = shallow(<Header />);
   let text = wrapper.find(".typo").text()
   expect(text).toBe("Github Code Search");
 });

});
