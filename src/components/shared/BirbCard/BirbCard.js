import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

import birbShape from '../../../helpers/props/birbShape';
import './BirbCard.scss';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;

    const singleBirbLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;

    return (
      <div className="BirbCard">
        <Card className="m-4 card-container">
          <CardBody className="card-body">
            <CardTitle className="type">{birb.type}</CardTitle>
            {birb.notes.length > 0 ? <CardText className="notes"><em>{birb.notes}</em></CardText> : ''}
            <div className="d-flex justify-content-center">
              <Link to={singleBirbLink} className="btn btn-success view-bird-button">View Birb</Link>
              <Link to={editLink} className="btn btn-primary edit-bird-button">Edit Birb</Link>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BirbCard;
