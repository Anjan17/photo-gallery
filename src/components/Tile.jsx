import React from "react";

const Tile = ({ name }) => {
  return (
    <div className="tile-wrapper">
      <input id={name} type="checkbox" />
      <div className="tile">
        <label htmlFor={name}>{name}</label>
      </div>
    </div>
  );
};

export default Tile;
