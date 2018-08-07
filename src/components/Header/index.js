import React, { Component } from 'react';
import { handleCollapse } from './action';
import { connect } from 'react-redux';
import './style.css';
class Header extends Component {
  handleCollapse = () => {
    this.props.handleCollapse();
  };
  render() {
    return (
      <div className="header">
        <div>
          <button onClick={this.handleCollapse}>Click</button>
        </div>
        <div className="headerRight">
          <h3>HH:MM</h3>
          <p>DD MM YYYY</p>
          <h3>LOGO</h3>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleCollapse: () => {
      dispatch(handleCollapse());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Header);
