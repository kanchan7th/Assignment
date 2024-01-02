import React, { useEffect, useState } from "react";

const GuessGame = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  useEffect(() => {
    //Set random number
    const num = Math.round(Math.random(100) * 30);
    setRandomNumber(num);
  }, []);
  useEffect(() => {
    // check if input number matches the random number
    checkNumber();
  }, [input]);

  const checkNumber = () => {
    if (!input) {
      console.log("enter number");
      setMessage("Enter Number");
    } else if (input < randomNumber) {
      console.log("lower");
      setMessage("Number is lower");
    } else if (input > randomNumber) {
      console.log("higher");
      setMessage("Number is higher");
    } else {
      console.log("you got it right");
      setMessage("Number is correct");
    }
  };

  return (
    <div>
      <h1> Guess Number between 1 to 30</h1>
      <input
        type="number"
        min={0}
        max={30}
        value={input}
        onChange={handleInput}
      />
      <br />
      <h2> {message}</h2>
    </div>
  );
};
export default GuessGame;
