import React from "react";
import './IteratorItem.sass'

const IteratorItem = props => {
  const keygen = () => {
    return (Date.now() * Math.random())
  }
  return (
    <div className="arr-item" key={keygen}>
      <div className="arr-block">
      {props.arrItem.map((cur, idx, self) => {
        return (
          <div key={`${keygen}-${idx}`}>
            <p>
              {cur}
              {idx + 1 === self.length ? null : ","}
            </p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default IteratorItem;
