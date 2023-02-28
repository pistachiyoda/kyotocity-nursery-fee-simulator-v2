import { Button, Fab, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { InputIncome } from "./components/InputIncome";
import { LayerTable } from "./components/LayreTable";
import { NurseryFeeTable } from "./components/NurseryFeeTable";
import { StepTitle } from "./components/StepTiltle";
import { CalculatorModel } from "./models/calculatorModel/calculatorModel";
import { Family } from "./models/family";
import { Input } from "./models/inputModel";
import { Output } from "./models/outputModel";
import CalculateIcon from "@mui/icons-material/Calculate";

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
    <>
      <title>京都市保育料シミュレーター</title>
      <meta
        name="description"
        content="京都市保育料を計算するツールです。給与年収を入力することで京都市の認可保育園の保育料を簡易的に計算できます。 京都市にて保活中の皆様、ぜひご活用ください！"
      />

      <Typography
        variant="h1"
        sx={{
          backgroundColor: "#622A78",
          color: "white",
          padding: "20px 15px 20px 20px",
          fontSize: "24px",
        }}
      >
        京都市の保育料シミュレーション
      </Typography>
      <p>
        幼保無償化対象外の0~2歳の京都市認可保育施設の保育料を、給与年収（サラリーマンの給料、パート収入など）・代表的な控除を入力することで簡易シミュレーションできます。
      </p>
      <Typography
        variant="h3"
        sx={{
          fontSize: "20px",
          p: 0.5,
          fontWeight: "bold",
          width: "80px",
          textAlign: "center",
          mb: 0.5,
        }}
      >
        使い方
      </Typography>
      <List>
        <ListItem>Step1. 父の収入を入力</ListItem>
        <ListItem>Step2. 母の年収を入力</ListItem>
        <ListItem>Step3. 【保育料を計算する】ボタンをクリック</ListItem>
      </List>
      <div className="App">
        <StepTitle>Step1 父の情報を入力</StepTitle>
        <InputIncome onChange={onChange} familyId={Family.FATHER} />
        <StepTitle>Step2 母の情報を入力</StepTitle>
        <InputIncome onChange={onChange} familyId={Family.MOTHER} />
        <Button onClick={() => setSimulationResult()}>計算する</Button>
        <StepTitle>Step3 保育料シミュレーション結果</StepTitle>
        <Stack>
          <LayerTable></LayerTable>
          <NurseryFeeTable></NurseryFeeTable>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            mt: 1,
          }}
        >
          ※この計算結果はあくまで参考情報のため、実際の保育料徴収額は京都市より送付される保育料決定通知書等をご確認ください。
        </Typography>
        <Fab
          variant="extended"
          color="secondary"
          sx={{
            fontSize: "20px",
            height: "50px",
            position: "fixed",
            bottom: "20px",
            right: "10px",
            zIndex: "1",
            fontWeight: "bold",
          }}
          onClick={() =>
            console.log("保育料を計算するボタンがクリックされた！")
          }
        >
          保育料を計算する&nbsp;
          <CalculateIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
