import React, { PureComponent } from 'react';
import './style.css';
export default class ButtonCustom extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <div>
        <button
          className={`${className} button-custom itemCenter `}
          {...this.props}>
          {children}
        </button>
      </div>
    );
  }
}
