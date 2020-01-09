import React, { Component } from "react";
import Card from "./Card";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { title: null };
  }
  render() {
    let list = this.props.board.boardList[
      this.props.id
    ].card.map((card, index) => <Card key={index} title={card.title}></Card>);
    return (
      <div>
        <div>{this.props.title}</div>
        <input
          type="text"
          onChange={elm => this.setState({ title: elm.target.value })}
        ></input>
        <button
          onClick={() => this.props.createCard(this.state.title, this.props.id)}
        >
          追加
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Board;
