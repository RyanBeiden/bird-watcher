import React from 'react';
import {
  CardColumns,
} from 'reactstrap';

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
  }

  render() {
    const { birbs } = this.state;

    const getBirbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb}/>);

    return (
      <div className="Home">
        <CardColumns>
          {getBirbCards}
        </CardColumns>
      </div>
    );
  }
}

export default Home;
