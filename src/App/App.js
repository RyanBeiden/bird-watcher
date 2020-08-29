import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';
import Home from '../components/pages/Home/Home';
import NewBirb from '../components/pages/NewBirb/NewBirb';

import './App.scss';

connection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <Auth authed={authed}/>
        <Home />
        <EditBirb />
        <NewBirb />
        <SingleBirb />
      </div>
    );
  }
}

export default App;
