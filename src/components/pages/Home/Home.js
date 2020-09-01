import React from 'react';

import birbData from '../../../helpers/data/birbData';
import authData from '../../../helpers/data/authData';
import BirbCard from '../../shared/BirbCard/BirbCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  componentDidMount() {
    birbData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('Could not get all birbs -> ', err));

    document.getElementById('newBirb').style.backgroundColor = '';
    document.getElementById('home').style.backgroundColor = '#9EC1CF';
  }

  render() {
    const { birbs } = this.state;

    const getBirbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb}/>);

    return (
      <div className="Home">
        <div className="Home__birb-cards">
          {getBirbCards}
        </div>
      </div>
    );
  }
}

export default Home;
