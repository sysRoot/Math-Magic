import React from "react";
import CollatzItem from './CollatzItem'

const CollatzDisplay = props => {
  return (
    <div className="resultsBox">
      {props.results.map((cur) => {
        return (
          <CollatzItem
          arrItem={cur.data}
          id={cur.id}
          held={cur.held}
          holder={props.holder}
          key={cur.id}
        />
        );
      })}

    </div>
  );
};

export default CollatzDisplay;
