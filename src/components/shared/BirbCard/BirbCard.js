import React from 'react';
import { Link } from 'react-router-dom';

import birbData from '../../../helpers/data/birbData';

class BirbCard extends React.Component {
  render() {
    return (
      <div className="BirbCard">
        <Link to='/birbs/{}'><h3>Birb!</h3></Link>
      </div>
    );
  }
}

export default BirbCard;
