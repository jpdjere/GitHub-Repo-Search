import React from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FA from "react-fontawesome";

const Header = () => {

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <FA
              name="github"
              className="card__fa"
              style={{marginRight:"15px"}}/>
            Github Code Search
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
