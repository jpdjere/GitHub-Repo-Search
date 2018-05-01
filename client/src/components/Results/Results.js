import React from "react";
import { withStyles } from 'material-ui/styles';
import './Results.css'
import Card from '../Card/Card.js'
import Rocket from './rocketship.png';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Results = () => {

  return (
    <div className="results__container">
      <img className="results__image" src={Rocket} alt="Results"/>
      <div className="results__cardContainer">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </div>
    </div>
  );
}

export default withStyles(styles)(Results);
