import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

import birbShape from '../../../helpers/props/birbShape';
import './BirbCard.scss';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;

    return (
      <div className="BirbCard">
        <Card className="m-4 card-container">
          <CardBody className="card-body">
            <CardTitle className="type">{birb.type}</CardTitle>
            <CardSubtitle className="location">{birb.location}</CardSubtitle>
            <CardSubtitle className="seenAt">{birb.seenAt}</CardSubtitle>
            <CardSubtitle className="size">{birb.size}</CardSubtitle>
            <CardSubtitle className="wasSleeping">{birb.wasSleeping ? <i className="fas fa-bed"></i> : <i className="fas fa-eye"></i>}</CardSubtitle>
            {birb.notes.length > 0 ? <CardText className="notes"><em>{birb.notes}</em></CardText> : ''}
            <Button className="view-bird-button">View Bird</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BirbCard;
