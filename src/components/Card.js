import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li>{this.props.title}</li>
    )
  }
}

export default Card
