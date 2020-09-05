import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

  deleteBirbEvent = (e) => {
    e.preventDefault();
    const { deleteBirbCard, birb } = this.props;
    deleteBirbCard(birb.id);
  }

  render() {
    const { birb } = this.props;

    const singleBirbLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;

    return (
      <div className="BirbCard">
        <Card className="m-4 card-container">
          <CardBody className="card-body">
            <CardTitle className="type">{birb.type}
              <Button className="btm btn-danger delete-icon" onClick={this.deleteBirbEvent}><i className="fas fa-trash-alt"></i></Button>
            </CardTitle>
            <CardText className="notes">Last Seen {moment(birb.seenAt).fromNow()}</CardText>
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
