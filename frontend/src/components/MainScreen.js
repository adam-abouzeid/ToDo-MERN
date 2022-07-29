import React from "react";
import "./MainScreen.css";
const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <div className="container-row">
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
              <hr />
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
