import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from "../../components/Header/Header.js"
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Results from "../../components/Results/Results.js"
import Top from "../../components/Top/Top.js"

class App extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <SearchBar></SearchBar>
        <Switch>
          <Route path="/" exact name="Results" component={Results}/>
          <Route path="/top/:id" name="Top Contributors" component={Top}/>
        </Switch>
      </div>
    );
  }
}

export default App;
