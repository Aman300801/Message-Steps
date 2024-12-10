import "./App.css";
import { useState } from "react";

const messages = ["hello world", "Hello Dishant", "Hello Aman"];

function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div
            className={`${step >= 1 ? "active" : ""} cursor-pointer`}
            onClick={() => setStep(1)}
          >
            1
          </div>
          <div
            className={`${step >= 2 ? "active" : ""}`}
            onClick={() => setStep(2)}
          >
            2
          </div>
          <div
            className={`${step >= 3 ? "active" : ""}`}
            onClick={() => setStep(3)}
          >
            3
          </div>
        </div>

        <p>Steps: {messages[step - 1]}</p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => setStep((step) => (step > 1 ? step - 1 : step))}
            disabled={step <= 1}
          >
            {/* this is wrong way to update state based on previous value */}
            {/* onClick={() => setStep(step > 1 ? step - 1 : step)} */}
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => setStep((step) => (step < 3 ? step + 1 : step))}
            disabled={step >= 3}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
