import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

export default function Board(props) {
  const [title, setTitle] = useState(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: () => null
  })
  return (
    <div ref={drop}>
      <div>{props.title}</div>
      <input
        type="text"
        onChange={elm => setTitle(elm.target.value)}
      ></input>
      <button
        onClick={() => props.createCard(title, props.id)}
      >
        追加
        </button>
      <ul>
        {props.board.boardList[props.id].card.map((card, index) => (
          <Card key={index} title={card.title}></Card>
        ))}
      </ul>
    </div>
  );

}
