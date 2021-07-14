import React from "react";
import propTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn" onClick={onAdd} style={{backgroundColor: showAdd ? 'red' : 'black'}}>
      {showAdd ? 'Close' : 'Add'}
      </button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
