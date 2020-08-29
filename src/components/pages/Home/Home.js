import React from 'react';

import BirbCard from '../../shared/BirbCard/BirbCard';

class Home extends React.Component {
  // editBirbEvent = (e) => {
  //   e.preventDefault();
  //   const birbId = 'birb10239';
  //   this.props.history.push(`/edit/${birbId}`);
  // }

  render() {
    return (
      <div className="Home">
        <BirbCard />
      </div>
    );
  }
}

export default Home;
