import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { register } from '../Actions';

import '../Styles/App.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      avatar: '',
      email: '',
      password: ''
    }
  }

  regUser() {
    const { name, avatar, email, password } = this.state;
    this.props.register(name, avatar, email, password);
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
          <h2 className="Title">Register</h2>

          <div className="form-group">

            <input className="form-control input" type="text" placeholder="Name in App" style={{marginTop: '30px'}}
             onChange={event => this.setState({name: event.target.value})} />

            <input className="form-control input" type="text" placeholder="Avatar URL(link do zdjecia opcjonalnie)"
             onChange={event => this.setState({avatar: event.target.value})} />

            <input className="form-control input" type="text" placeholder="Email"
             onChange={event => this.setState({email: event.target.value})} />

            <input className="form-control input" type="password" placeholder="Password"
             onChange={event => this.setState({password: event.target.value})} />

          </div>

          <button className="btn btn-success" style={{marginTop: '10px'}} onClick={() => this.regUser()}>Register</button>

          <Link className="Link" to='/login'>Go to Login</Link>

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

export default connect(mapStateToProps, { register })(Register);
