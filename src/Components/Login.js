import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { login } from '../Actions';

import '../Styles/App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      avatar: ''
    }
  }

  logUser() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={500}>

        <div className="Wrap">

          <h1 className="Logo">Flux</h1>
          <h2 className="Title">Login</h2>

          <div className="form-group">

            <input className="form-control input" type="text" placeholder="Email" style={{marginTop: '30px'}} onChange={event => this.setState({email: event.target.value})} />
            <input className="form-control input" type="password" placeholder="Password" style={{marginTop: '10px'}} onChange={event => this.setState({password: event.target.value})} />

          </div>

          <button className="btn btn-success" style={{marginTop: '10px'}} onClick={() => this.logUser()}>Login</button>

          <p className="Login-description" style={{marginTop: '10px', marginBottom: '15px'}}>Default account:</p>
          <p className="Login-description">Email: test@test.com</p>
          <p className="Login-description">Password: testtest</p>

          <Link className="Link" to='/register'>Go to Register</Link>

        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps, { login })(Login);
