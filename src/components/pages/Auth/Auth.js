import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Sign In to Watch Birbs</h1>
        <button className="btn btn-info Auth__sign-in" onClick={this.loginClickEvent}><i className="fab fa-google"></i></button>
      </div>
    );
  }
}

export default Auth;
