import React from "react";
import { useDrag } from "react-dnd";

export default function Card(props) {
  const [, drag] = useDrag({
    item: { type: "CARD" },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return <li ref={drag}>{props.title}</li>;
}
