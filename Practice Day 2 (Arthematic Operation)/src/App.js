import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const number1 = +num1;
    const number2 = +num2;

    if (!num1 || !num2) {
      setResult("Enter both numbers");
      return;
    }

    if (operation === "add") setResult(number1 + number2);
    else if (operation === "subtract") setResult(number1 - number2);
    else if (operation === "multiply") setResult(number1 * number2);
    else if (operation === "divide") {
      setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Simple Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="mb-2 px-2 py-1 border rounded"
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="mb-4 px-2 py-1 border rounded"
      />
      <div className="space-x-2">
        <button onClick={() => calculate("add")} className="px-3 py-1 bg-blue-500 text-white rounded">
          +
        </button>
        <button onClick={() => calculate("subtract")} className="px-3 py-1 bg-red-500 text-white rounded">
          -
        </button>
        <button onClick={() => calculate("multiply")} className="px-3 py-1 bg-green-500 text-white rounded">
          *
        </button>
        <button onClick={() => calculate("divide")} className="px-3 py-1 bg-yellow-500 text-white rounded">
          ÷
        </button>
      </div>
      {result && <div className="mt-4 text-lg font-semibold">Result: {result}</div>}
    </div>
  );
};

export default App;
