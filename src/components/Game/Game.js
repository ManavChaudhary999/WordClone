import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function AddGuess(guessedWord)
  {
    const newResults = [...guesses, guessedWord];
    setGuesses(newResults);

    if(guessedWord.toUpperCase() === answer)
      setGameStatus('won');
    else if(newResults.length === NUM_OF_GUESSES_ALLOWED)
      setGameStatus('lost');  
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput AddGuess={AddGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WonBanner noOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
    );
}

export default Game;
