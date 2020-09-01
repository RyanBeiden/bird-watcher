import React from 'react';

import birbData from '../../../helpers/data/birbData';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;

    birbData.getBirbById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('Could not get single birb -> ', err));
  }

  render() {
    return (
      <div className="SingleBirb">
        <h2>Single Birb</h2>
      </div>
    );
  }
}

export default SingleBirb;
