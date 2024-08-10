import "./styles.css";
import ProgressBar from "./Components/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(10);
  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
  });
  return (
    <div className="App">
      <h2>Progress Bar</h2>
      <div className="Progress-Bar">
        <ProgressBar value={value} />
      </div>
    </div>
  );
}
