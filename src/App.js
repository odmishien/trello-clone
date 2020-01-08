import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  createNewBoard = (title) => {
    ReactDOM.render(<Board title={title}></Board>, document.getElementById("boards"));
  }
  render() {
    return (
      <div>
        <form onSubmit={e => {
          // formのデフォルトのイベントをキャンセル
          e.preventDefault();
          const title = e.target.elements["title"].value;
          this.createNewBoard(title);
        }}>
          <input type="text" id="title"></input>
          <button type="submit">新規作成</button>
        </form>
        <div id="boards"></div>
      </div>
    );
  }
}

export default App;
