import React from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FA from "react-fontawesome";
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="header__dist">
            <Link to="/" className="header__title">

              <Typography variant="title" color="inherit">
                <FA
                  name="code"
                  className="card__fa"
                  style={{marginRight:"15px"}}
                />
                Github Code Search
              </Typography>
            </Link>
            <a href="https://github.com/jpdjere" target="_blank" className="header__title">
              <FA
                name="github"
                className="header__gh"
              />
            </a>


          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
