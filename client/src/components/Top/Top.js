import React, {Component} from "react";
import { connect } from "react-redux";
import { getTopContrib } from "../../actions";
import './Top.css'
import Contributor from '../Contributor/Contributor.js'


class Top extends Component {
  constructor(props){
    super(props)
    this.state = {
      limit:10
    }
  };

  componentDidMount(state, props){
    const { id } = this.props.match.params;
    let repo = this.props.repos.items.find(repo => {
      return repo.id === parseInt(id);
    })
    let {name, owner: {login}} = repo;
    this.props.getTopContrib(login, name);
  };

  render(){
    return (
      <div className="top__container">
        {this.props.contributors &&
          this.props.contributors.slice(0,this.state.limit).map((contrib,i) => {
            return (

              <Contributor
                className="top__contributor"
                key={i}
                login={contrib.login}
                contributions={contrib.contributions}
                url={contrib.html_url}
                avatar={contrib.avatar_url}

              />
            )
          })
        }

      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    repos:state.repos,
    contributors:state.contributors
  }
}

export default connect(mapStateToProps, {getTopContrib})(Top);
