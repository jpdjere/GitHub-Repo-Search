import React, {Component} from "react";
import { connect } from "react-redux";
import { getTopContrib } from "../../actions";
import './Top.css'
import Button from 'material-ui/Button';
import Contributor from '../Contributor/Contributor.js'


class Top extends Component {
  constructor(props){
    super(props)
    this.state = {
      limit:10
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){
    this.setState((prevState, props) => ({
      limit: prevState.limit + 10
    }));
  }

  renderButton(){
    if(!this.props.contributors) return;
    if(this.props.contributors.length <= this.state.limit) return;
    return <Button className="top__button" onClick={() => this.handleClick()}>Load more...</Button>
  }

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
        <h1>Top Contributors</h1>
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
        {this.renderButton()}

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
