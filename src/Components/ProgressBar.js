import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  });
  return (
    <div
      className="ProgressBar-Display"
      style={{ width: `${percentage}%`, backgroundColor: "green" }}
    >
      <span>{percentage}%</span>
    </div>
  );
};
export default ProgressBar;
