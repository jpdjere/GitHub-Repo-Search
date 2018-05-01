import React from "react";
import "./Contributor.css";
import Emoji from 'react-emoji-render';
import { Link } from 'react-router-dom'
import FA from "react-fontawesome";

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const Contributor = props => {
  const {login, contributions, url, avatar } = props;
  console.log("avatar", avatar);
  return (

    <div>
      <Card className="contributor__card">
        <div className="contributor__details">
          <CardContent className="contributor__content">
            <Typography variant="headline">{login}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {contributions} contributions
            </Typography>
          </CardContent>
          <div className="contributor__controls">
            <a href={url} target="_blank" className="contributor__gh">
              <IconButton aria-label="Github">
                <FA name="github" className="contributor_fa" />
              </IconButton>

            </a>

          </div>
        </div>
        <CardMedia
          className="contributor__cover"
          image={avatar}
          title={login}
        />
      </Card>
    </div>

  );
}

export default Contributor;
