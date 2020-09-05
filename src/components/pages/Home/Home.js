import React from 'react';

import birbData from '../../../helpers/data/birbData';
import authData from '../../../helpers/data/authData';
import BirbCard from '../../shared/BirbCard/BirbCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  getBirbs = () => {
    birbData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('Could not get all birbs -> ', err));
  }

  componentDidMount() {
    this.getBirbs();
  }

  deleteBirbCard = (birbId) => {
    birbData.deleteBirb(birbId)
      .then(() => {
        this.getBirbs();
      })
      .catch((err) => console.error('Deleting a birb did not work -> ', err));
  }

  render() {
    const { birbs } = this.state;

    const getBirbCards = birbs.map((birb) => <BirbCard
      key={birb.id}
      birb={birb}
      deleteBirbCard={this.deleteBirbCard}
    />);

    return (
      <div className="Home">
        <div className="Home__birb-cards">
          {getBirbCards}
        </div>
        <footer>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </footer>
      </div>
    );
  }
}

export default Home;
