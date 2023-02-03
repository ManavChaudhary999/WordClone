import React from "react";
import {range} from "../../utils";

function Guess({word}) {
  const alphabets = word ? word.split('') : undefined;
  return (
    <p className="guess">
    {
      range(5).map(num => (
        <span key={num} className="cell">{alphabets && alphabets[num]}</span>
      ))
    }
    </p>
  );
}

export default Guess;
