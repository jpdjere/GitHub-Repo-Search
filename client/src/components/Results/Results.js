import React from "react";
import { connect } from "react-redux";
import './Results.css'
import Card from '../Card/Card.js'
import Rocket from './rocketship.png';
import SearchBar from "../../components/SearchBar/SearchBar.js";
import Loader from "../../components/Loader/Loader.js";
import { submitSearch } from "../../actions"

const Results = props => {

  let renderImageOrLoader = () => {
    if(props.misc && props.misc.loader){
      return <div><Loader></Loader></div>
    }
    if(!props.repos){
      return <img className="results__image" src={Rocket} alt="Results"/>
    }
  }

  return (
    <div>
      <SearchBar></SearchBar>
      <div className="results__container">
        {renderImageOrLoader()}
        {
          props.repos &&
          <div className="results__cardContainer">
            {props.repos.items.sort((a,b) => {
              return b.stargazers_count - a.stargazers_count
            }).slice(0,6).map(repo => {
              let {name, owner: {login}} = repo;
              return (
                <Card
                  fullName={repo.full_name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  issues={repo.open_issues}
                  url={repo.html_url}
                  id={repo.id}
                  owner={login}
                  repo={name}
                  key={repo.id}
                />
              )

            })}

          </div>
        }
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    repos:state.repos,
    misc: state.misc
  }
}

export default connect(mapStateToProps, null)(Results);
