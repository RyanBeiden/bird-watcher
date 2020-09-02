import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import moment from 'moment';
import birbData from '../../../helpers/data/birbData';
import './SingleBirb.scss';

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
    const { birb } = this.state;

    return (
      <div className="SingleBirb container">
        <Card className="m-4 SingleBirb__card">
          <CardBody className="card-body">
            <CardTitle className="SingleBirb__type">Type &gt; <span className="name-border">{birb.type}</span></CardTitle>
            <CardSubtitle className="SingleBirb__location">Location &gt; <span className="name-border">{birb.location}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__seenAt">Last seen on &gt; <span className="name-border">{moment(birb.seenAt).format('MMMM Do YYYY, h:mma')}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__size">Size &gt; <span className="name-border">{birb.size}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__wasSleeping">Sleeping? <span className="name-border">{birb.wasSleeping ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</span></CardSubtitle>
            <CardText className="SingleBirb__notes">Notes &gt; <span className="name-border"><em>{birb.notes}</em></span></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBirb;
