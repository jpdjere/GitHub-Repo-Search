import React from "react";
import { withStyles } from 'material-ui/styles';
import Rocket from './rocketship.png';
import './Results.css'

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Results = () => {

  return (
    <div className="results__container">
      <img className="results__image" src={Rocket} alt="Results"/>
    </div>
  );
}

export default withStyles(styles)(Results);
