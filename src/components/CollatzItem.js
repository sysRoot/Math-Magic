import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CollatzItem.sass'

const CollatzItem = props => {
  return (
    <div className="arr-item" key={props.id}>
      <div className="arr-block">
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
      </div>
      <div className="btn-container">
        {props.held ? (
          <button className="button-hold" onClick={props.holder} data-key={props.id}>
            <FontAwesomeIcon icon="hand-point-left" />
          </button>
        ) : (
          <button className="button-destroy" onClick={props.holder} data-key={props.id}>
            <FontAwesomeIcon icon="radiation" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CollatzItem;
