import React from "react";
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import './Results.css'
import Card from '../Card/Card.js'
import Rocket from './rocketship.png';
import SearchBar from "../../components/SearchBar/SearchBar.js"

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Results = props => {

  return (
    <div>
      <SearchBar></SearchBar>
      <div className="results__container">
        {
          !props.repos &&
          <img className="results__image" src={Rocket} alt="Results"/>
        }
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
    repos:state.repos
  }
}

const ResultsHOC = withStyles(styles)(Results);

export default connect(mapStateToProps, null)(ResultsHOC);
