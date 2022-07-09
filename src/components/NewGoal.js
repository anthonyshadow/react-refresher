import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const handleAddGoal = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText('');

    props.onAddGoal(newGoal);
  };

  const handleTextChange = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={handleAddGoal}>
      <input type="text" value={enteredText} onChange={handleTextChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
