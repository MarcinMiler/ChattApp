import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

import Login from './Components/Login';
import Register from './Components/Register';
import App from './Components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));

//checking if user is login or must login
firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    browserHistory.push('/app');
  } else {
    browserHistory.push('/login');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>

      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Route path='/register' component={Register} />

    </Router>
  </Provider>,
  document.getElementById('root')
)
