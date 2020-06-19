import React from "react";

const PrimaryHeading = ({ text, classList }) => {
  return (
    <h2 className={`${classList ? classList : ""} primary-heading`}>{text}</h2>
  );
};

export default PrimaryHeading;
