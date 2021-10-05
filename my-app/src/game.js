import React from "react";

function getInitialState() {
  re

const Game = () => {
  return (
    <div className="Game">
      <div className="Game__board">
        {Array.from({ lenght: 9 }).map((_, index) => (
          <buton key={index} type="button">
            {index}
          </buton>
        ))}
      </div>
    </div>
  );
};
export default Game;
