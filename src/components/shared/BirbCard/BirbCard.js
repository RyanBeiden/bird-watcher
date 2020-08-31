import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

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
            {birb.notes.length > 0 ? <CardText className="notes"><em>{birb.notes}</em></CardText> : ''}
            <Button className="view-bird-button">View Bird</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BirbCard;
