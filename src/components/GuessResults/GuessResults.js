import React from "react";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

import Guess from "../Guess";

function GuessResults({guesses, answer}) {
  return (
    <div className="guess-results">
    {
      // guesses.map((guessedWord, idx) => (
      //   <p key={idx} className="guess">{guessedWord}</p>
      // ))
      range(NUM_OF_GUESSES_ALLOWED).map(row => {
        // const word = guesses[row];
        return <Guess key={row} value={guesses[row]} answer={answer} />
      })
    }
    </div>
  );
}

export default GuessResults;
