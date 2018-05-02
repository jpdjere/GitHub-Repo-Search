import React from "react";
import { connect } from "react-redux";
import './Search.css';
import {Route, Switch} from 'react-router-dom';
import Rocket from './rocketship.png';
import SearchBar from "../../components/SearchBar/SearchBar.js";
import Loader from "../../components/Loader/Loader.js";
import Results from "../../components/Results/Results.js";

const Search = props => {

  let renderImageOrLoader = () => {
    if(props.misc && props.misc.loader){
      return <div className="search__loader"><Loader></Loader></div>
    }
    if(!props.repos){
      return <img className="search__image" src={Rocket} alt="Rocket!"/>
    }
  }

  return (
    <div className="search__container">
      {renderImageOrLoader()}
      <Switch>
        <Route exact path="/" component={Results}/>
      </Switch>
    </div>
  );
}

function mapStateToProps(state){
  return {
    repos:state.repos,
    misc: state.misc
  }
}

export default connect(mapStateToProps, null)(Search);
