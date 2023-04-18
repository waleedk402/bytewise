import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import Button from "./Button";
import {useLocation} from 'react-router-dom'
const Header = ({ onAdd, showAddTask }) => {
    const location=useLocation()
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname==='/' && <Button
        color={showAddTask ? "red" : "green"}
        onAdd={onAdd}
        text={showAddTask ? "Close" : "Add"}
      />}
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
