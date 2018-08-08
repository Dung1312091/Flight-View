import React, { Component } from 'react';
import Input from '../../components/Input';
import ButtonCustom from '../../components/ButtonCustom';
import emailIcom from '../../image/message.png';
import passWordIcon from '../../image/padlock.png';
import './style.css';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: '',
        password: ''
      },
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formInValid: true
    };
  }
  onHandleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        account: {
          ...this.state.account,
          [name]: value
        }
      },
      () => {
        this.validateField(name, value);
      }
    );
  };
  validateField(fieldName, value) {
    let { formErrors, emailValid, passwordValid } = this.state;
    let fieldValidationErrors = formErrors;
    switch (fieldName) {
      case 'email':
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        emailValid = emailRegex.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        email: fieldValidationErrors.email,
        password: fieldValidationErrors.password
      },
      emailValid: emailValid,
      passwordValid: passwordValid,
      formValid: !emailValid && passwordValid
    });
  }
  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  errorClass = error => {
    return error.length === 0 ? '' : 'has-error';
  };
  render() {
    const { account, formErrors, formInValid } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <Input
            icon={emailIcom}
            placeholder="Email"
            value={account.email}
            name="email"
            onChange={this.onHandleChange}
            alt=""
            className={this.errorClass(formErrors.email)}
          />
          <Input
            icon={passWordIcon}
            placeholder="Password"
            value={account.password}
            name="password"
            onChange={this.onHandleChange}
            alt=""
            className={this.errorClass(formErrors.password)}
          />
          <ButtonCustom type="submit" disabled={formInValid}>
            <div className="login-in-text">Login</div>
          </ButtonCustom>
        </form>
      </div>
    );
  }
}

export default Login;
