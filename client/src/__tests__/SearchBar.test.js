import React from 'react';
import { ReduxForm, SearchBar } from '../components/SearchBar/SearchBar';

import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';


import { mount, shallow } from "enzyme";
import { HashRouter, Route } from "react-router-dom";
import { handleSubmit } from 'redux-form';

describe('Search Bar',() => {
  let wrapper;
  beforeEach(() => {

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});

    wrapper = mount(
      <Provider store={store}>
        <ReduxForm history={[]} submitSearch={jest.fn()} showLoader={jest.fn()}/>
      </Provider>
    );
  });

  it('should allow the user to enter text into text area',() => {

    let input = wrapper.find('input')
    console.log(input.debug());
    expect(input).toBeDefined();
    wrapper.find('input').simulate('submit',{
      target: {value:'new search term'}
    });
    wrapper.update();
    console.log(wrapper.find('#test').debug());



  })
})
