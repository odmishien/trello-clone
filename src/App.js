import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import BoardCreatorContainer from "./containers/BoardCreatorContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <DndProvider backend={Backend}>
        <BoardCreatorContainer></BoardCreatorContainer>
      </DndProvider>
    );
  }
}

export default App;
