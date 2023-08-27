import { useState } from "react";

const YearlySavings = () => {
  const [YearlySavings, setYearlySavings] = useState("");

  const onYearlySavingsHandler = (e) => {
    console.log(YearlySavings);
    setYearlySavings(e.target.value);
  };

  return (
    <div>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          onChange={onYearlySavingsHandler}
        />
      </p>
    </div>
  );
};

export default YearlySavings;
