import React from 'react';
import {App} from '../views/App/App';

import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { HashRouter, Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar"

describe('App', () => {

  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  })

  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should contain HashRouter and three Routes',() => {
    //The following line returns -first- an array of instances which
    // HashRouter is found, and then length is used to return how many times
    const hashRouterAmount = wrapped.find(HashRouter).length;
    const routeAmount = wrapped.find(Route).length;
    expect(hashRouterAmount).toEqual(1);
    expect(routeAmount).toEqual(3);
  });

  it('should contain SearchBar',() => {
    const searchBarAmount = wrapped.find(SearchBar).length;
    expect(searchBarAmount).toEqual(1);
  })

 // it('should match the snapshot', () => {
 //   // const tree = renderer.create(<App />).toJSON();
 //   const tree = shallow(<App />);
 //   expect(tree).toMatchSnapshot();
 // });

});
