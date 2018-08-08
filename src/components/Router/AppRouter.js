import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AppRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log('AuthRoute', isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to="/login" /> : <Redirect to="/login" />
      }
    />
  );
};

AppRouter.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps)(AppRouter);
