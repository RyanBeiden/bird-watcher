import React from 'react';

class NewBirb extends React.Component {
  componentDidMount() {
    document.getElementById('home').style.backgroundColor = '';
    document.getElementById('newBirb').style.backgroundColor = '#9EE09E';
  }

  render() {
    return (
      <h2>New Birb</h2>
    );
  }
}

export default NewBirb;
