import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';
import birbData from '../../../helpers/data/birbData';

import 'react-datepicker/dist/react-datepicker.css';
import './NewBirb.scss';

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: false,
    location: '',
    notes: '',
  }

  componentDidMount() {
    document.getElementById('checkbox-status').style.backgroundColor = 'transparent';
    document.getElementById('checkbox-status').style.borderRight = '2px solid #3e3e3e';
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  changeLocationEvent = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  }

  changeSleepingEvent = (e) => {
    const checkedStatus = e.target.checked;

    if (checkedStatus) {
      document.getElementById('checkbox-status').style.backgroundColor = '#8dd890';
      document.getElementById('checkbox-status').style.color = '#fff';
      this.setState({ wasSleeping: true });
    } else {
      document.getElementById('checkbox-status').style.backgroundColor = 'transparent';
      document.getElementById('checkbox-status').style.borderRight = '2px solid #3e3e3e';
      this.setState({ wasSleeping: false });
    }
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  saveBirb = (e) => {
    e.preventDefault();
    const keysIWant = ['type', 'color', 'size', 'seenAt', 'altColor', 'wasSleeping', 'location', 'notes'];

    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birbData.createBirb(newBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error('New birb did not work -> ', err));
  }

  render() {
    const {
      type,
      location,
      seenAt,
      size,
      wasSleeping,
      notes,
    } = this.state;

    return (
      <div className="NewBirb">
        <h2>New Birb</h2>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter a Birb Type"
              value={type}
              onChange={this.changeTypeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="birbLocation"
              placeholder="Enter Birb's Location"
              value={location}
              onChange={this.changeLocationEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSize">Size</label>
            <input
              type="text"
              className="form-control"
              id="birbSize"
              placeholder="Enter Birb's Size"
              value={size}
              onChange={this.changeSizeEvent}
            />
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="birbSleeping"
              defaultChecked={wasSleeping}
              onChange={this.changeSleepingEvent}/>
            <p>Sleeping</p>
            <label className="custom-control-label" id="checkbox-status" htmlFor="birbSleeping"></label>
          </div>
          <div className="form-group">
            <label htmlFor="birbNotes">Notes</label>
            <input
              type="text"
              className="form-control"
              id="birbNotes"
              placeholder="Enter Birb's Notes"
              value={notes}
              onChange={this.changeNotesEvent}
            />
          </div>
          <div className="form-group">
            <label className="pr-3" htmlFor="birbType">Seen At: </label>
            <DatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-warning save-birb-button" onClick={this.saveBirb}>Save Birb</button>
        </form>
      </div>
    );
  }
}

export default NewBirb;
