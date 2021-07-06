import React, { createContext, useState } from "react";
import NavMenu from "./NavMenu";

const Topnavbar = ({ updateValue, isOpen }) => {
  return (
    <nav>
      <div id="logo">My Logo</div>
      <NavMenu updateValue={updateValue} isOpen={isOpen} />
      <ul>
        <li>Home</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      <div />
    </nav>
  );
};

const NavmenuContext = createContext({ isOpen: false });

export const NavmenuProvider = ({ children }) => {
  const [context, setContext] = useState({ isOpen: false });

  const updateNavToggle = (value) => {
    setContext({ isOpen: value });
  };

  return (
    <NavmenuContext.Provider value={{ ...context, updateNavToggle }}>
      <Topnavbar updateValue={updateNavToggle} isOpen={context.isOpen} />
      {children}
    </NavmenuContext.Provider>
  );
};

export const NavmenuConsumer = NavmenuContext.Consumer;
export default Topnavbar;
