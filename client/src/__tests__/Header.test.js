import React from "react";
import Header from '../components/Header/Header';
import { shallow, mount } from "enzyme";
import { Router } from "react-router";
import { createMemoryHistory } from 'history';
import FA from "react-fontawesome";
import Typography from 'material-ui/Typography';

describe('Header',() => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Router history={createMemoryHistory()}>
        <Header/>
      </Router>
    );
  });

  it('should have title of Github Code Search',() => {
    const wrapper = shallow(
          <Router history={createMemoryHistory()}>
            <Header/>
          </Router>
    );
    console.log(wrapper.debug());
    console.log(wrapped.debug());
    console.log(wrapped.find(Typography).debug());
    // expect(wrapped.find(Typography)).to.have.prop(
    //   'children',
    //   'See list of all projects'
    // );
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
    wrapped.unmount();
  })

})
