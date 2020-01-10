import React, { Component } from "react";
import BoardContainer from "../containers/BoardContainer";

class BoardCreator extends Component {
  state = {
    title: ""
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={elm => this.setState({ title: elm.target.value })}
        ></input>
        <button onClick={() => this.props.createBoard(this.state.title)}>
          追加
        </button>
        {this.props.board.boardList
          ? Object.keys(this.props.board.boardList).map((key, index) => (
              <BoardContainer
                key={index}
                title={this.props.board.boardList[key].title}
                id={key}
              ></BoardContainer>
            ))
          : null}
      </div>
    );
  }
}

export default BoardCreator;
