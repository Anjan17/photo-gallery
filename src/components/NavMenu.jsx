import React from "react";

const NavMenu = ({ updateValue, isOpen }) => {
  const updateNavOpen = updateValue;
  return (
    <div className="menu">
      <div
        className="menu-icon"
        onClick={() => {
          updateNavOpen(!isOpen);
        }}
      >
        <span onClick={() => updateNavOpen(false)} />
        <span onClick={() => updateNavOpen(false)} />
        <span onClick={() => updateNavOpen(false)} />
      </div>{" "}
    </div>
  );
};

export default NavMenu;
