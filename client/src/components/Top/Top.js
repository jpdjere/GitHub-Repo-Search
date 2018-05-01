import React, {Component} from "react";
import { connect } from "react-redux";
import { getTopContrib } from "../../actions";
import './Top.css'
import Card from '../Card/Card.js'


class Top extends Component {

  render(){
    return (
      <div className="top__container">

      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    repos:state.repos
  }
}

export default connect(mapStateToProps, {getTopContrib})(Top);
