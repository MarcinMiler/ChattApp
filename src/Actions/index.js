import { firebaseApp, fireData } from '../firebase';

//USER STAF

export const setUserName = (name) => ({
  type: "SET_USER_NAME",
  name
})

export const setUserAvatar = (avatar) => ({
  type: "SET_USER_AVATAR",
  avatar
})

//fetching nick and avatar from database
export const readNameAndAvatar = () => {
  return function (dispatch) {

    firebaseApp.auth().onAuthStateChanged(user => {
      if(user) {

        let userID = user.uid;

        fireData.ref(`users/${userID}`).once('value', snapshot => {
          let { nick, avatar } = snapshot.val();

          dispatch(setUserName(nick));
          dispatch(setUserAvatar(avatar));
        });
      }
    })
  }
}
//login to app
export const login = (email, password) => {
  return function (dispatch) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }
}
//register to app
export const register = (name, avatar, email, password) => {
  return function (dispatch) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebaseApp.auth().currentUser;

        let data = {
          nick: name,
          avatar: avatar && avatar.length > 0 ? avatar : 'https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg'
        }
        fireData.ref(`users/${user.uid}`).set(data);
      })
  }
}


//Messages

export const addMessage = (text, name, avatar) => ({
  type: "ADD_MESSAGE",
  text,
  name,
  avatar
})

//adding message to database
export const addMessageToFirebase = (text, name, avatar) => {
  return function (dispatch) {
    let msg = {
      text,
      name,
      avatar
    }
    const msgRef = fireData.ref('messages/').push();
    msgRef.set(msg);
  }
}

//fetching messages when change are made in database
export const fetchMessages = () => {
  return function (dispatch) {

    fireData.ref('messages').on('value', snapshot => {
      let messages = [];
      let names = [];
      let avatars = [];

      snapshot.forEach(msg => {
        const { text, name, avatar } = msg.val();
        messages.push(text);
        names.push(name);
        avatars.push(avatar);
      })

      dispatch(addMessage(messages, names, avatars));
    })
  }
}
