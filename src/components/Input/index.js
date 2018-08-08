import React, { Component } from 'react';
import './style.css';
export class Input extends Component {
  render() {
    const {
      icon,
      alt,
      className,
      name,
      value,
      placeholder,
      onChange
    } = this.props;
    return (
      <div style={{ marginTop: '50px' }}>
        <div className={`input-group ${className} `}>
          <span className="input-group-addon custom-icon">
            <img src={icon} alt={alt} />
          </span>
          <input
            className="form-control custom-input "
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default Input;
