import React from "react";
import "./Iterator.sass";
import IteratorDisplay from "./IteratorDisplay";

const Iterator = props => {
  return (
    <>
      <h2>This is a simple iterator</h2>
      <h3>Input parameters to iterate.</h3>
      <h4>The first box is your integer</h4>
      <h4>The second box is the stepped increment/decrement</h4>
      <h6>
        Numbers are amazing, especially the "magic" numbers. This is a tool that
        simply allows you to count by a specified step, from a starting number.
      </h6>
      <p>The idea behind this tool is to simply uncover interesting patterns</p>
      <p>
        <small>
          The upper tier on the array while counting up is 1000 array indices.
          This is to avoid memory limits
        </small>
      </p>
      <form onSubmit={props.iterate} className="iteratorModifier">
        <input
          type="number"
          name="startVal"
          min="1"
          max="999999"
          value={props.startVal}
          onChange={props.changer}
        />
        <input
          type="number"
          name="iterVal"
          min="1"
          max="999999"
          value={props.iterVal}
          onChange={props.changer}
        />
        <label>
          <input type="radio" name="upOrDown" value="increase" checked={props.upOrDown === "increase"} onChange={props.changeRadio} />
          Increase
        </label>
        <label>
          <input type="radio" name="upOrDown" value="decrease" checked={props.upOrDown === "decrease"} onChange={props.changeRadio} />
          Decrease
        </label>
        <button type="submit">Iterate!</button>
      </form>
      <IteratorDisplay iterArr={props.iterArr} />
    </>
  );
};

export default Iterator;
