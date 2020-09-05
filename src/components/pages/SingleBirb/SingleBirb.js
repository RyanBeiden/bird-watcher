import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
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

  deleteSingleBirb = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;

    birbData.deleteBirb(birbId)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error('Deleting a single birb did not work -> ', err));
  }

  render() {
    const { birb } = this.state;
    const { birbId } = this.props.match.params;
    const editLink = `/edit/${birbId}`;

    return (
      <div className="SingleBirb container">
        <Card className="m-4 SingleBirb__card">
          <CardBody className="card-body">
            <CardTitle className="SingleBirb__type">Type &gt; <span className="name-border">{birb.type}</span>
              <Button className="btm btn-danger delete-icon" onClick={this.deleteSingleBirb}><i className="fas fa-trash-alt"></i></Button>
              <Link to={editLink}><Button className="btm btn-primary edit-icon"><i className="fas fa-edit"></i></Button></Link>
            </CardTitle>
            <CardSubtitle className="SingleBirb__location">Location &gt; <span className="name-border">{birb.location}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__seenAt">Last seen on &gt; <span className="name-border">{moment(birb.seenAt).format('MMMM Do YYYY, h:mma')}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__size">Size &gt; <span className="name-border">{birb.size}</span></CardSubtitle>
            <CardSubtitle className="SingleBirb__wasSleeping">Sleeping? <span className="name-border">
              {birb.wasSleeping ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</span>
            </CardSubtitle>
            <CardText className="SingleBirb__notes">Notes &gt; <span className="name-border"><em>{birb.notes}</em></span></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBirb;
