import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import birbData from '../../../helpers/data/birbData';
import authData from '../../../helpers/data/authData';

import 'react-datepicker/dist/react-datepicker.css';
import './EditBirb.scss';

class EditBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: false,
    location: '',
    notes: '',
    loading: true,
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    birbData.getBirbById(birbId)
      .then((res) => {
        const birbThatIAmEditing = res.data;
        this.setState({
          type: birbThatIAmEditing.type,
          color: birbThatIAmEditing.color,
          size: birbThatIAmEditing.size,
          seenAt: new Date(birbThatIAmEditing.seenAt),
          altColor: birbThatIAmEditing.altColor,
          wasSleeping: birbThatIAmEditing.wasSleeping,
          location: birbThatIAmEditing.location,
          notes: birbThatIAmEditing.notes,
        });
        if (birbThatIAmEditing.wasSleeping) {
          document.getElementById('checkbox-status').style.backgroundColor = '#8dd890';
          document.getElementById('checkbox-status').style.color = '#fff';
          document.getElementById('checkbox-status').style.borderRight = '2px solid #3e3e3e';
        } else {
          document.getElementById('checkbox-status').style.backgroundColor = 'transparent';
          document.getElementById('checkbox-status').style.borderRight = '2px solid #3e3e3e';
        }
      })
      .catch((err) => console.error('Getting birb by id did not work -> ', err));
  }

  editTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  editLocationEvent = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  editSeenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  }

  editSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  }

  editSleepingEvent = (e) => {
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

  editNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  updateBirbEvent = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;
    const keysIWant = ['type', 'color', 'size', 'seenAt', 'altColor', 'wasSleeping', 'location', 'notes'];
    const updatedBirb = _.pick(this.state, keysIWant);

    updatedBirb.uid = authData.getUid();
    birbData.updateBirb(birbId, updatedBirb)
      .then(() => this.props.history.push(`/birbs/${birbId}`))
      .catch((err) => console.error('Updating the birb did not work -> ', err));
  }

  render() {
    const {
      type,
      location,
      size,
      notes,
      seenAt,
    } = this.state;

    return (
      <div className="EditBirb" id="EditBirb">
        <h2>Edit {type}</h2>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter a Birb Type"
              value={type}
              onChange={this.editTypeEvent}
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
              onChange={this.editLocationEvent}
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
              onChange={this.editSizeEvent}
            />
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="birbSleeping"
              onChange={this.editSleepingEvent}
            />
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
              onChange={this.editNotesEvent}
            />
          </div>
          <div className="form-group">
            <label className="pr-3" htmlFor="birbType">Seen At: </label>
            <DatePicker
              selected={seenAt}
              onChange={this.editSeenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-warning save-birb-button" onClick={this.updateBirbEvent}>Update Birb</button>
        </form>
      </div>
    );
  }
}

export default EditBirb;
