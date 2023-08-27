import { useState } from "react";

const InvestmentDuration = () => {
  const [investmentDuration, setInvestmenetDuration] = useState("");

  const onInvestmentDurationHandler = (e) => {
    setInvestmenetDuration(e.target.value);
    console.log(investmentDuration);
  };

  return (
    <div>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          onChange={onInvestmentDurationHandler}
        />
      </p>
    </div>
  );
};

export default InvestmentDuration;
