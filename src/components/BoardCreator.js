import React, { Component } from "react";
import BoardContainer from '../containers/BoardContainer';

class BoardCreator extends Component {
  state = {
    title: ""
  };

  render() {
    let list;
    if (this.props.board.boardList) {
      list = Object.keys(this.props.board.boardList).map((key, index) => (
        <BoardContainer key={index} title={this.props.board.boardList[key].title} id={key}></BoardContainer>
      ));
    } else {
      list = null
    }
    return (
      <div>
        <input
          type="text"
          onChange={elm => this.setState({ title: elm.target.value })}
        ></input>
        <button onClick={() => this.props.createBoard(this.state.title)}>
          追加
        </button>
        {list}
      </div>
    );
  }
}

export default BoardCreator;
