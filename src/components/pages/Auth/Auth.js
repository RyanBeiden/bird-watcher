import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

class Auth extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  signInClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  signOutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    const checkUserSignIn = () => {
      if (authed) {
        return <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.signInClickEvent}>Sign In</button>;
      }

      return <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={this.signOutClickEvent}>Sign Out</button>;
    };

    return (
      <nav className="navbar navbar-light bg-light">
        <h1 className="navbar-brand">Bird Watcher <i className="fab fa-earlybirds"></i></h1>
        <form className="form-inline">
          {checkUserSignIn()}
        </form>
      </nav>
    );
  }
}

export default Auth;
