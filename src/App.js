import React, { Component } from "react";
import "./App.sass";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMinus,
  faPlus,
  faRadiation,
  faHandPointLeft
} from "@fortawesome/free-solid-svg-icons";
import Collatzer from "./components/Collatzer";
library.add(faMinus, faPlus, faRadiation, faHandPointLeft);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: 1,
      multiVal: 3,
      addVal: 1,
      mergedVal: `3n+1`,
      collatzArr: [],
      heldArrs: []
    };
  }
  up = () => {
    if (this.state.addVal < 1024) {
      this.setState(prevState => ({
        multiVal: prevState.multiVal * 2,
        addVal: prevState.addVal * 2,
        mergedVal: `${prevState.multiVal * 2}n+${prevState.addVal * 2}`
      }));
    }
  };
  down = () => {
    if (this.state.addVal !== 1) {
      this.setState(prevState => ({
        multiVal: prevState.multiVal / 2,
        addVal: prevState.addVal / 2,
        mergedVal: `${prevState.multiVal / 2}n+${prevState.addVal / 2}`
      }));
    }
  };
  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: Number(event.target.value) });
  };
  collatzFunc = event => {
    event.preventDefault();
    const heldArray = [...this.state.collatzArr].filter(cur => cur.held)
    this.setState({collatzArr: heldArray});

    let resultA = [];
    let initA = [this.state.integer];
    do {
      if (initA[initA.length - 1] % 2 === 0) {
        initA.push(initA[initA.length - 1] * 0.5);
      } else {
        initA.push(
          initA[initA.length - 1] * this.state.multiVal + this.state.addVal
        );
      }
      resultA = [...initA];
    } while (resultA[resultA.length - 1] !== 1);
    return this.setState(prevState => {
      return {
        collatzArr: [
          { data: [...resultA], id: Date.now() * Math.random(), held: false },
          ...prevState.collatzArr
        ]
      };
    });
  };
  holdHandler = event => {
    event.stopPropagation();
    const toggledArray = [...this.state.collatzArr];
    let position = null;

    const target = toggledArray.find((cur, index) => {
      position = index;
      let found
      console.log(
        cur,
        Number.parseFloat(event.target.getAttribute("data-key"), 10),
        Number.parseFloat(
          event.target.parentNode.parentNode.getAttribute("data-key"),
          10
        )
      );
      if (
        cur.id ===
          Number.parseFloat(event.target.getAttribute("data-key"), 10) ||
        cur.id ===
          Number.parseFloat(
            event.target.parentNode.getAttribute("data-key"),
            10
          ) ||
        cur.id ===
          Number.parseFloat(
            event.target.parentNode.parentNode.getAttribute("data-key"),
            10
          )
      ) {
        return found = cur.id;
      }
      return found
    });

    target.held === false ? (target.held = true) : (target.held = false);

    toggledArray[position] = target;

    this.setState({ collatzArr: toggledArray });
  };
  render() {
    return (
      <div className="App">
        <Collatzer
          mergedVal={this.state.mergedVal}
          collatzUp={this.up}
          collatzDown={this.down}
          changer={this.changeHandler}
          integer={this.state.integer}
          multi={this.state.multiVal}
          add={this.state.addVal}
          collatz={this.collatzFunc}
          result={this.state.collatzArr}
          holder={this.holdHandler}
        />
      </div>
    );
  }
}

export default App;
