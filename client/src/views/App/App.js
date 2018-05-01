import React, { Component } from 'react';
import './App.css';
import Header from "../../components/Header/Header.js"
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Results from "../../components/Results/Results.js"

class App extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <SearchBar></SearchBar>
        <Results></Results>
      </div>
    );
  }
}

export default App;
