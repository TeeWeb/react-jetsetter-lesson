import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    // Do something when the state of this input changes.
    this.setState({ value: event.value })
  };

  handleSubmit = event => {
    const { onSubmit } = this.props.addItem(this.state.value);
    const { value } = this.state.value;

    event.preventDefault();

    // Do something when a new value is submitted.
    return 
    // Reset the state of the component.
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
