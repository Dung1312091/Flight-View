import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css';
const listMenu = [
  {
    group: 'REPORT',
    menuItem: [
      {
        name: 'Filight Report',
        linkTo: '/dashboard',
        icon: 'fighter-jet'
      },
      {
        name: 'Ground Performantce',
        linkTo: '/dashboard/setting',
        icon: 'fighter-jet'
      }
    ]
  }
];
export class LeftSideBar extends Component {
  renderGroupMenu = () => {
    return listMenu.map((gr, i) => {
      return (
        <React.Fragment key={i}>
          <li className="groupMenu">
            <span className="groupMenuText menuText">{gr.group}</span>
          </li>
          {this.renderMenu(gr.menuItem)}
        </React.Fragment>
      );
    });
  };
  renderMenu = (menuList, i) => {
    return menuList.map((e, i) => {
      return (
        <li key={i}>
          <NavLink
            exact
            to={e.linkTo}
            activeClassName="active"
            className="routerLink">
            <Icon name={e.icon} className="icon" />
            <span className="menuText">{e.name}</span>
          </NavLink>
        </li>
      );
    });
  };
  render() {
    return <div className="listMenu">{this.renderGroupMenu()}</div>;
  }
}

export default LeftSideBar;
