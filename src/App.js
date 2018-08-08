import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
// import Header from './components/Header';
import AuthRoute from './components/Router/AuthRouter';
import UserRoute from './components/Router/UserRoute';
import AppRoute from './components/Router/AppRouter';
import './App.css';

const LoadableDashBoard = Loadable({
  loader: () => import('./containers/Dashboard'),
  loading() {
    return <div>Loading...</div>;
  }
});
const LoadableSetting = Loadable({
  loader: () => import('./components/Setting'),
  loading() {
    return <div>Loading...</div>;
  }
});
const LoadableLogin = Loadable({
  loader: () => import('./containers/Login'),
  loading() {
    return <div>Loading...</div>;
  }
});
class App extends Component {
  render() {
    const { location, lang } = this.props;
    return (
      <IntlProvider locale={lang}>
        <React.Fragment>
          <Switch>
            <AppRoute path="/" exact component={() => null} />
            <AuthRoute
              path="/dashboard"
              component={() => (
                <LoadableDashBoard>
                  <AuthRoute
                    exact
                    path="/dashboard/setting"
                    component={LoadableSetting}
                  />
                </LoadableDashBoard>
              )}
            />
            <UserRoute exact path="/login" component={LoadableLogin} />
          </Switch>
        </React.Fragment>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    loaded: state.user.loaded,
    lang: state.user.lang
  };
};
export default withRouter(connect(mapStateToProps)(App));
