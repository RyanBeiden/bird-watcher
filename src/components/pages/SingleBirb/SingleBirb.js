import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

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
            <CardTitle className="SingleBirb__type">{birb.type}</CardTitle>
            <CardSubtitle className="SingleBirb__location">{birb.location}</CardSubtitle>
            <CardSubtitle className="SingleBirb__seenAt">{birb.seenAt}</CardSubtitle>
            <CardSubtitle className="SingleBirb__size">{birb.size}</CardSubtitle>
            <CardSubtitle className="SingleBirb__wasSleeping">{birb.wasSleeping ? <i className="fas fa-bed"></i> : <i className="fas fa-eye"></i>}</CardSubtitle>
            <CardText className="SingleBirb__notes"><em>{birb.notes}</em></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBirb;
