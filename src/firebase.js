import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAvEfiVobF0u_xV9OywtmxSyIxVsWScmCs",
    authDomain: "test-b39bb.firebaseapp.com",
    databaseURL: "https://test-b39bb.firebaseio.com",
    projectId: "test-b39bb",
    storageBucket: "test-b39bb.appspot.com",
    messagingSenderId: "901871716478"
  };
export const firebaseApp = firebase.initializeApp(config);
export const fireData = firebase.database();
