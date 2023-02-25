import { Button } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { InputIncome } from "./components/InputIncome";
import { CalculatorModel } from "./models/calculatorModel/calculatorModel";
import { Input } from "./models/inputModel";
import { Output } from "./models/outputModel";

enum Famiry {
  FATHER, // 0
  MOTHER, // 1
}

function App() {
  // const [input, setInput] = useState<Input>({ income: 0 });
  const [inputList, setInputList] = useState<Input[]>([
    { income: 0 },
    { income: 0 },
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
    inputList[familyId].income = val;
    setInputList(inputList);
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
      <InputIncome onChange={onChange} familyId={Famiry.FATHER} />
      <h2>母</h2>
      <InputIncome onChange={onChange} familyId={Famiry.MOTHER} />
      <Button onClick={() => setSimulationResult()}>計算する</Button>
    </div>
  );
}

export default App;
