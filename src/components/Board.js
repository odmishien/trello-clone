import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default Board
