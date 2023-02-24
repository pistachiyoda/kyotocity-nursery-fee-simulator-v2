import { Button } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { InputIncome } from "./components/InputIncome";
import { CalculatorModel } from "./models/calculatorModel/calculatorModel";
import { Input } from "./models/inputModel";
import { Output } from "./models/outputModel";

function App() {
  const [input, setInput] = useState<Input>({ income: 0 });
  const [output, setOutput] = useState<Output>({
    taxableIncome: 0,
    cityTaxCalculateIncome: 0,
    cityTaxIncome: 0,
    cityTax: 0,
  });
  const onChange = (val: number) => {
    input.income = val;
    setInput(input);
  };
  const calculator = new CalculatorModel();
  const setSimulationResult = () => {
    const latestOutput = calculator.calcOutputs(input);
    console.log(latestOutput);
    setOutput(latestOutput);
  };
  console.log(output);
  return (
    <div className="App">
      <InputIncome onChange={onChange} />
      <Button onClick={() => setSimulationResult()}>計算する</Button>
    </div>
  );
}

export default App;
