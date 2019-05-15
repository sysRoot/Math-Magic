import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollatzItem = props => {
  return (
    <div key={props.id}>
      {props.arrItem.map((cur, idx, self) => {
        return (
          <div key={`${props.id}-${idx}`}>
            <p>
              {cur}
              {idx + 1 === self.length ? null : ","}
            </p>
          </div>
        );
      })}
      <div>
        {props.held ? (
          <button onClick={props.holder} data-key={props.id}>
            <FontAwesomeIcon icon="hand-point-left" />
          </button>
        ) : (
          <button onClick={props.holder} data-key={props.id}>
            <FontAwesomeIcon icon="radiation" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CollatzItem;
