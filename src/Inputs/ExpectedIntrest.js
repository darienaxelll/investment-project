import { useState } from "react";

const ExpectedIntrest = () => {
  const [expectedIntrest, setExpectedIntrest] = useState("");

  const onExpectedIntrestHandler = (e) => {
    setExpectedIntrest(e.target.value);
    console.log(expectedIntrest);
  };

  return (
    <div>
      <p>
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          type="number"
          id="expected-return"
          onChange={onExpectedIntrestHandler}
        />
      </p>
    </div>
  );
};

export default ExpectedIntrest;
