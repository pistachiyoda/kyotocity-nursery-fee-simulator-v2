import { Button } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { InputIncome } from "./components/InputIncome";
import { CalculatorModel } from "./models/calculatorModel/calculatorModel";
import { Family } from "./models/family";
import { Input } from "./models/inputModel";
import { Output } from "./models/outputModel";

function App() {
  // const [input, setInput] = useState<Input>({ income: 0 });
  const [inputList, setInputList] = useState<Input[]>([
    { employmentIncome: 0 },
    { employmentIncome: 0 },
  ]);

  const [output, setOutput] = useState<Output[]>([
    {
      taxableIncome: 0,
      cityTaxCalculateIncome: 0,
      cityTaxIncome: 0,
      cityTax: 0,
    },
    {
      taxableIncome: 0,
      cityTaxCalculateIncome: 0,
      cityTaxIncome: 0,
      cityTax: 0,
    },
  ]);

  const onChange = (familyId: number, val: number) => {
    const newInputList = inputList.map((input, index) => {
      if (index === familyId) return { ...input, employmentIncome: val };
      return input;
    });
    setInputList(newInputList);
  };
  const calculator = new CalculatorModel();
  const setSimulationResult = () => {
    const latestOutput = calculator.calcOutputs(inputList);
    console.log(latestOutput);
    setOutput(latestOutput);
  };
  console.log(output);
  return (
    <div className="App">
      <h2>父</h2>
      <InputIncome onChange={onChange} familyId={Family.FATHER} />
      <h2>母</h2>
      <InputIncome onChange={onChange} familyId={Family.MOTHER} />
      <Button onClick={() => setSimulationResult()}>計算する</Button>
    </div>
  );
}

export default App;
