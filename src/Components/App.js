import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { firebaseApp } from '../firebase';

import { connect } from 'react-redux';
import { readNameAndAvatar, fetchMessages, addMessageToFirebase } from '../Actions';

import '../Styles/App.css';
import '../Styles/Animation.css';

class App extends Component {

  logOut() {
    firebaseApp.auth().signOut();
  }

  addMsg(text, name, avatar) {
    this.props.addMessageToFirebase(text, name, avatar);
  }

  componentDidMount() {
    this.props.readNameAndAvatar();
    this.props.fetchMessages();
  }

  render() {

    const listMessages = this.props.messages.text.map((text, i) => {
      let image = this.props.messages.avatar[i];
      return (
        <div className="row" style={{marginTop: '10px'}} key={i}>
          <div className="Profile-img" style={{backgroundImage: `url(${image})`, backgroundSize: '80px 60px'}}></div>
          <li className="list-group-item Message"><b>{this.props.messages.name[i]}:</b> <p>{text}</p></li>
        </div>
      )
    })

    return(
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={500}>

        <div className="Wrap">

          <h1 className="Title">ChatApp</h1>

          <ul className="list-group">

            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}>

              {
                listMessages
              }

            </ReactCSSTransitionGroup>

          </ul>

          <input className="form-control" type="text" placeholder="Say something..." onKeyPress={event => {
            if(event.key === 'Enter'){
              this.addMsg(event.target.value, this.props.user.name, this.props.user.avatar);
              event.target.value = '';
            }
          }}/>

          <button className="btn btn-danger" style={{marginTop: '20px'}} onClick={() => this.logOut()}>Logout</button>

          <p className="Footer" >Made by: Marcin Miler</p>

        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.User,
    messages: state.Messages
  }
}

export default connect(mapStateToProps, { readNameAndAvatar, fetchMessages, addMessageToFirebase })(App);
