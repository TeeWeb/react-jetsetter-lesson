import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    unpackedItems: [],
    packedItems: [],
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
  addItem = item => {
    let newItem = { value: item, id: uniqueId(), packed: false }
    this.setState({ unpackedItems: this.state.unpackedItems.push(newItem)})
  }

  componentDidMount() {
    defaultState.forEach(item => {
      if(item.packed) {
        this.setState({
          packedItems: this.state.packedItems.push(item)
        })
      } else if (item.packed === false) {
        this.setState({
          unpackedItems: this.state.unpackedItems.push(item)
        })
      } else {
        console.log("ERROR: item 'packed' state is invalid")
      }
    });
  }

  render() {
    // Get the items from state

    return (
      <div className="Application">
        <NewItem addItem={this.addItem} />
        <CountDown />
        <Items title="Unpacked Items" items={this.state.unpackedItems} />
        <Items title="Packed Items" items={this.state.packedItems} />
        <button className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
