import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Collatzer.sass';
import CollatzDisplay from './CollatzDisplay'


const Collatzer = (props) => {

    return (
        <>  <h2>Collatz Conjecture Climbing Comparatives</h2>
            <h3>Input parameters to see the array difference.</h3>
            <h4>The first box is your integer</h4>
            <h4>The second box is the stepped increment</h4>
            <h6>The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. <small>(source: <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Wikipedia</a>)</small></h6>
            <p>The idea behind my stepping is that the arrays have comparative values that seem to have indicated maybe a hidden relationship between numbers. Any bit type number always runs descending perfectly, like 8, 16, 32, 64, 128, 256, etc... even obviously on higher steps, this is why I call it climbing comparatives. This tool will eventually allow you to "hold" arrays present as you change steps, with the ability to remove them. Sort of like a collatz todo list. Just a fun useless project on a dreary day.</p>
            <p><small>I limited the steps to 3072n+1024 to avoid abusing memory, and I feel this amount of steps is sufficient enough to be useful.</small></p>
            <form onSubmit={props.collatz}

                className="collatzModifier"
            >
                <input type="number" name="integer" min="1" max="999999" value={props.integer} onChange={props.changer} />
                <input type="text" value={props.mergedVal} readOnly="readonly" />
                <FontAwesomeIcon icon="plus" onClick={props.collatzUp} />
                <FontAwesomeIcon icon="minus" onClick={props.collatzDown} />
                <button type='submit'>Collatz!</button>
            </form>
            <CollatzDisplay holder={props.holder} results={props.result} />
        </>
    );
}

export default Collatzer;