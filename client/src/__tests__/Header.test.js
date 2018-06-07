import React from "react";
import Header from '../components/Header/Header';
import { mount } from "enzyme";
import { Router } from "react-router";
import { createMemoryHistory } from 'history';
import FA from "react-fontawesome";


describe('Header',() => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Router history={createMemoryHistory()}>
        <Header/>
      </Router>
    );
  })

  it('should have a Github logo linking to the repo',() => {
    //Correct link
    expect(wrapped.find('a').filterWhere(item => {
      return item.prop('href') === "https://github.com/jpdjere"
    }).length).toEqual(1);
    //Correct Logo
    expect(wrapped.find(FA).filterWhere(item => {
      return item.prop('name') === "github"
    }).length).toEqual(1);
  })

  it('should have two FA logos',() => {
    expect(wrapped.find(FA).length).toEqual(2);
  })

  afterEach(() => {

  })

})
