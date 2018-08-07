import React, { Component } from 'react';
import DashBoard from '../../containers/Dashboard';
import { Switch, Route, withRouter } from 'react-router-dom';
import Setting from '../Setting';
export class Home extends Component {
  render() {
    return (
      <div>
        <p>Home page</p>
        <DashBoard>
          <Route path="/dashboard/setting" component={Setting} />
        </DashBoard>
      </div>
    );
  }
}

export default withRouter(Home);
