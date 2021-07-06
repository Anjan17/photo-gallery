import React from "react";
import { NavmenuConsumer } from "./Topnavbar";
const Page = ({ children }) => {
  return (
    <NavmenuConsumer>
      {(value) => (
        <div className="page">
          {value.isOpen ? (
            <div id="menu-modal">
              <ol>
                <li>Home</li>
                <li>Works</li>
                <li>Contact</li>
              </ol>
            </div>
          ) : null}
          {children}
        </div>
      )}
    </NavmenuConsumer>
  );
};

export default Page;
