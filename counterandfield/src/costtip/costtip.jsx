import "./styles.css";
import { useState } from "react";

// this is a cost and tip calculator using useState hooks
export default function App() {
  const [cost, setCost] = useState("");
  const [tip, setTip] = useState("");
  const [custom, setCustom] = useState("");
  const handleChange = (e) => {
    let custom = document.getElementById("customdiv");
    if (e.target.name == "cost") {
      setCost(Number(e.target.value));
    }
    if (e.target.name == "tip") {
      if (e.target.value == "0") {
        custom.style.display = "block";
        setTip(0);
      } else {
        custom.style.display = "none";
        setTip(Number(e.target.value));
      }
    }
    if (e.target.name == "custom") {
      setCustom(Number(e.target.value));
    }
  };
  const handleSubmit = () => {};
  return (
    <div className="App">
      <h4>Cost for today's meal</h4>
      <div>
        <input value={cost} name="cost" type="number" onChange={handleChange} />
      </div>
      <div>
        <h4>How would you rate our service?</h4>
        <select value={tip} name="tip" id="" onChange={handleChange}>
          <option value="">Select One</option>
          <option value="0.3">outstanding-30%</option>
          <option value="0.2">good-20%</option>
          <option value="0.1">somewhat satisfied-10%</option>
          <option value="0.05">dissatisfied-5%</option>
          <option value="0">custom</option>
        </select>
        <div id="customdiv" style={{ display: "none" }}>
          Custom amount: $
          <input
            type="number"
            name="custom"
            value={custom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <h4>
          Total Cost: $
          {tip == 0 ? cost * tip + cost + custom : cost * tip + cost}
        </h4>
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
