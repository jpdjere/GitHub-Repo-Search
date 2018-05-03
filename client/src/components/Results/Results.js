import React, {Component} from "react";
import "./Results.css"
import Card from '../Card/Card.js';
import { connect } from "react-redux";
import { getRepos } from "../../actions";
import { withRouter } from 'react-router';

class Results extends Component {

  componentDidMount(){
    let qs = new URLSearchParams(this.props.history.location.search);
    let presentSearch = qs.get('search');
    this.setState({
      searchTerm:presentSearch
    })
    if(!presentSearch) return;
    this.props.getRepos(presentSearch);
  }

  //Props (location) get updated
  componentDidUpdate(prevProps, prevState, snapshot){
    let qs = new URLSearchParams(this.props.history.location.search);
    let presentSearch = qs.get('search');
    if(this.state.searchTerm !== presentSearch && presentSearch !== undefined){
      this.setState({
        searchTerm:presentSearch
      })
      this.props.getRepos(presentSearch);
    }

  }


  render(){

    return(
      <div className="results__container">

        {
          this.props.repos &&
          <div className="results__cardContainer">
            {this.props.repos.items.sort((a,b) => {
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
    )
  }

}

function mapStateToProps(state){
  return {
    repos:state.repos,
    misc: state.misc
  }
}

let reduxHOC = connect(mapStateToProps, {getRepos})(Results);
export default withRouter(reduxHOC);
