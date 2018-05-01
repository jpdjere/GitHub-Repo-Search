import React from "react";
import PropTypes from 'prop-types';
import "./Card.css";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Emoji from 'react-emoji-render';
import FA from "react-fontawesome";

let renderDescription = text => {
  if(text.length > 150){
    return (
      <Emoji text={text.slice(0,150)+ " ..."} />
    )
  }
  return <Emoji text={text} />
}

const CardComponent = props => {
  const { classes, fullName, description,language, stars, issues, url } = props;
  return (

      <Card className="card">
        <CardContent className="card__content">
          <div className="card__titles">
            <Typography className="card__title" color="textSecondary">
              <FA name="star" className="card__fa" /> {stars} stars
            </Typography>
            <Typography className="card__title" color="textSecondary">
              <FA name="exclamation-circle" className="card__fa" /> {issues} issues
            </Typography>
          </div>
          <Typography variant="headline" component="h2">
            {fullName}
          </Typography>
          <Typography className="card__pos" color="textSecondary">
            {language}
          </Typography>
          <Typography component="p">
            {description && renderDescription(description)}
          </Typography>
          <CardActions className="card__action">
            <a className="card__link" href={url} target="_blank">
              <Button className="card__button" size="small">
                <FA name="github" className="card__fa" />See on Github
              </Button>
            </a>
            <a className="card__link" href={url} target="_blank">
              <Button className="card__button" size="small">
                <FA name="rocket" className="card__fa" /> TOP CONTRIBUTORS
              </Button>
            </a>
          </CardActions>
        </CardContent>
      </Card>

  );
}

export default CardComponent;
