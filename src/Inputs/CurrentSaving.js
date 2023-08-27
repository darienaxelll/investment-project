import { useState } from "react";

const CurrentSavings = () => {
  const [currentSavings, setCurrentSavings] = useState("");

  const onCurrentSavingsHandler = (e) => {
    setCurrentSavings(e.target.value);
    console.log(currentSavings);
  }

  return (
    <div>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" onChange={onCurrentSavingsHandler}/>
      </p>
    </div>
  );
};

export default CurrentSavings;
