import React from "react";
import IteratorItem from "./IteratorItem";

const IteratorDisplay = props => {
  return (
    <div className="resultsBox">
      <IteratorItem arrItem={props.iterArr} />
    </div>
  );
};

export default IteratorDisplay;
