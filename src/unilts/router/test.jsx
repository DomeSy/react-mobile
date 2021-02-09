import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount =  async () => {
    const { routes } = this.props;

  }


  render(){
    const { routes } = this.props;

    return (
      <>
        <Router>
          <Switch>
            {
              routes.map((item, index) => (
                <Route exact path={item.path} component={item.component} key={index}/>
              ))
            }
          </Switch>
        </Router>
      </>
    )
  }
}

export default Index
