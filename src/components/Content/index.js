import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Setting from '../Setting';
import DashBoard from '../DashBoard';
import AuthRouter from '../Router/AuthRouter';
export class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <AuthRouter path="/setting" component={Setting} />
      </Switch>
    );
  }
}

export default Content;
