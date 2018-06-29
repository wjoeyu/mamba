import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoCloseModal = this.loginDemoCloseModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <div className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </div>
    );
  }

  loginDemoCloseModal() {
    this.props.signInDemo();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="login-form-container">
      <div onClick={this.props.closeModal} className="close-x">&times;</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="form-type-title">{this.props.formType}</div>

          {(this.props.formType === "Log in") ?
            <div
              className="demo-login"
              onClick={() => this.loginDemoCloseModal()}>
                Use Demo Account
            </div>
            : ""}
          {(this.props.formType === "Log in") ?
            <div className="form-option">or</div> 
            : ""}

          {this.renderErrors()}
          <div className="login-form">
            {(this.props.formType === "Sign up") ?
              (<div>
                <label>Name</label>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                  placeholder="Your Name"
                />
              </div>
            ) : ""}
            <label>Email Address</label>
              <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="name@company.com"
              />
            <label>Password</label>
            <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="password"
              />
            <input id="session-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
        {(this.props.formType === "Sign up")?
          "Have an account?" : "Don't have an account?" }
        {this.props.otherForm}
      </div>
    );
  }
}

export default withRouter(SessionForm);
