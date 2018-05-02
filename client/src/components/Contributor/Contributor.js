import React from "react";
import "./Contributor.css";
import FA from "react-fontawesome";
import Transition from 'react-transition-group/Transition';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

class Contributor extends React.Component{
// const Contributor = props => {
  constructor(props){
    super(props);
    this.state = {
      show:false
    }
  }
  componentDidMount(){
    this.setState({
      show:true
    })
  }

  render(){
    let {login, contributions, url, avatar, order } = this.props;
    console.log(order);
    const duration = 200;
    if(order > 10){
      order = order % 10;
    }
    const defaultStyle = {
      transition: `opacity ${duration * order}ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0 , marginTop:"500px"},
      entered:  { opacity: 1 , marginTop:0},
    };
    return (
      <Transition
        in={this.state.show}
        timeout={duration}
        unmountOnExit
        >
          {status => {
            return (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[status]
              }}>
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
            )
          }
        }
      </Transition>
    );
  }
}



export default Contributor;
