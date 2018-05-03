import React, {Component} from "react";
import { connect } from "react-redux";
import { getTopContrib, removeTopContrib } from "../../actions";
import './Top.css'
import Button from 'material-ui/Button';
import Contributor from '../Contributor/Contributor.js';
import { Link } from 'react-router-dom'
import Loader from "../../components/Loader/Loader.js";
import FA from "react-fontawesome";


class Top extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewLimit:10,
      page:1,
      pageLength:30
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){

    if(this.state.viewLimit % this.state.pageLength !== 0){

      this.setState((prevState, props) => {
        return { viewLimit: prevState.viewLimit + 5 }
      })
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot){

    if(this.state.viewLimit % this.state.pageLength === 0){
      //Estoy en un multiplo de 30, pido más data
      const { owner, repo } = this.props.match.params;
      const { page } = this.state;
      this.setState((prevState, props) => {

        return(
          {
            viewLimit: prevState.viewLimit + 5,
            page: prevState.page + 1
          }
        )
      })
      this.props.getTopContrib(owner, repo, page + 1);
    }

  }

  renderButton(){
    if(!this.props.contributors) return;
    if(this.props.contributors.length < this.state.viewLimit){
      return;
    }
    return <Button className="top__button" onClick={() => this.handleClick()}>Load more...</Button>
  }

  componentDidMount(state, props){
    const { owner, repo } = this.props.match.params;
    const { page } = this.state;
    this.props.getTopContrib(owner, repo, page);
  };

  componentWillUnmount(){
    this.props.removeTopContrib();
  }

  render(){
    return (

      <div className="top__container">
        <div className="top__title">
          <Link to="/">
            <FA name="arrow-left" className="top_fa" />
          </Link>
          <h1>Top Contributors</h1>
        </div>
        {
          (this.props.contributors && this.props.contributors.length === 0) ? <p>No contributors</p> : (
          (this.props.contributors &&
          this.props.contributors.slice(0,this.state.viewLimit).map((contrib,i) => {
            return (

              <Contributor
                className="top__contributor"
                key={i}
                login={contrib.login}
                contributions={contrib.contributions}
                url={contrib.html_url}
                avatar={contrib.avatar_url}
                order={i+1}

              />
            )
          }) ) || <div style={{marginTop:"70px"}}><Loader></Loader></div>)
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

export default connect(mapStateToProps, {getTopContrib, removeTopContrib})(Top);
