import React from "react";

import GuessInput from "../GuessInput";

function GuessResults() {
  const [results, setResults] = React.useState([]);

  function AddGuess(guessedWord)
  {
    const id = Math.random();
    const guess = {id, guessedWord};
    const newResults = [...results, guess];
    setResults(newResults);
  }

  return (
    <>
      <div className="guess-results">
      {
        results.map(({id, guessedWord}) => (
          <p key={id} className="guess">{guessedWord}</p>
        ))
      }
      </div>
      <GuessInput AddGuess={AddGuess} />
    </>
  );
}

export default GuessResults;
