import { Button, Fab, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { InputIncome } from "./components/InputIncome";
import { LayerTable } from "./components/LayreTable";
import { NurseryFeeTable } from "./components/NurseryFeeTable";
import { StepTitle } from "./components/StepTiltle";
import { CalculatorModel } from "./models/calculatorModel/calculatorModel";
import { Family } from "./models/family";
import { Output } from "./models/outputModel";
import CalculateIcon from "@mui/icons-material/Calculate";
import { layerRange } from "./models/layerRange";
import { layerSpecifierModel } from "./models/layerSpecifierModel";
import { InputInfo } from "./models/inputModel/inputInfoModel";
import { RadioInputInfo } from "./components/RadioInputlnfo";
import { SelectInputInfo } from "./components/SelectInputInfo";
import { InputAge } from "./components/InputAge";

function App() {
  const [inputInfo, setInputInfo] = useState<InputInfo>({
    generalInfo: {
      isWelfareHousehold: false,
      isSingleParentHousehold: false,
      numberOfChildren: 1,
      ageOfChildren: [0],
    },
    individualInfoInputList: [{ employmentIncome: 0 }, { employmentIncome: 0 }],
  });

  const [output, setOutput] = useState<Output[]>([
    {
      income: 0,
      taxableIncome: 0,
      cityTaxCalculateIncome: 0,
      cityTaxIncome: 0,
    },
    {
      income: 0,
      taxableIncome: 0,
      cityTaxCalculateIncome: 0,
      cityTaxIncome: 0,
    },
  ]);

  const onIsWelfareHouseholdChange = (val: boolean) => {
    const generalInfo = {
      ...inputInfo.generalInfo,
      isWelfareHousehold: val,
    };
    const newInputInfo = { ...inputInfo, generalInfo };
    console.log(newInputInfo);
    setInputInfo(newInputInfo);
  };

  const onIsSingleParentHouseholdChange = (val: boolean) => {
    const generalInfo = {
      ...inputInfo.generalInfo,
      isSingleParentHousehold: val,
    };
    const newInputInfo = { ...inputInfo, generalInfo };
    console.log(newInputInfo);
    setInputInfo(newInputInfo);
  };

  const numberOfChildrenRange = [1, 2, 3];

  const onNumberOfChildrenChange = (val: number) => {
    const generalInfo = {
      ...inputInfo.generalInfo,
      numberOfChildren: val,
      ageOfChildren: Array(val).fill(0),
    };
    const newInputInfo = { ...inputInfo, generalInfo };
    console.log(newInputInfo);
    setInputInfo(newInputInfo);
  };

  const onAgeOfChildrenChange = (val: number, index: number) => {
    const ages = inputInfo.generalInfo.ageOfChildren;
    ages[index] = val;
    const generalInfo = {
      ...inputInfo.generalInfo,
      ageOfChildren: ages,
    };
    const newInputInfo = { ...inputInfo, generalInfo };
    console.log(newInputInfo);
    setInputInfo(newInputInfo);
  };

  const onIndividualInfoChange = (familyId: number, val: number) => {
    const individualInfoInputList = inputInfo.individualInfoInputList.map(
      (input, index) => {
        if (index === familyId) return { ...input, employmentIncome: val };
        return input;
      }
    );
    const newInputInfo = { ...inputInfo, individualInfoInputList };
    setInputInfo(newInputInfo);
  };
  const calculator = new CalculatorModel();
  const layerSpecifier = new layerSpecifierModel();

  const calcSimulationResult = () => {
    return calculator.calcOutputs(inputInfo);
  };

  const [layer, setLayer] = useState<layerRange>(0);

  const [nurseryFee_a, setNurseryFee_a] = useState([0]);
  const [nurseryFee_b, setNurseryFee_b] = useState([0]);
  const [nurseryFee_c, setNurseryFee_c] = useState([0]);

  const setResult = () => {
    const latestOutput = calcSimulationResult();
    setOutput(latestOutput);
    const familyCityTax =
      latestOutput[0].cityTaxIncome + latestOutput[1].cityTaxIncome;
    const income = latestOutput[0].income;
    const layer = layerSpecifier.specifyLayer(familyCityTax, income, inputInfo);
    setLayer(layer);
    const familyNurseryFee = layerSpecifier.specifyFamilyNurseryFee(
      layer,
      inputInfo.generalInfo
    );
    const a = familyNurseryFee.map((content) => content[0]);
    const b = familyNurseryFee.map((content) => content[1]);
    const c = familyNurseryFee.map((content) => content[2]);
    setNurseryFee_a(a);
    setNurseryFee_b(b);
    setNurseryFee_c(c);
    console.log(nurseryFee_a);
    console.log(nurseryFee_b);
    console.log(nurseryFee_c);
    console.log(latestOutput);
  };

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
        <ListItem>Step1. 家庭環境情報を入力</ListItem>
        <ListItem>Step2. 父の収入を入力</ListItem>
        <ListItem>Step3. 母の年収を入力</ListItem>
        <ListItem>Step4. 【保育料を計算する】ボタンをクリック</ListItem>
      </List>
      <div className="App">
        <StepTitle>Step1 家庭環境情報を入力</StepTitle>
        <RadioInputInfo
          onChange={onIsWelfareHouseholdChange}
          subtitle={"生活保護世帯かどうか"}
        />
        <RadioInputInfo
          onChange={onIsSingleParentHouseholdChange}
          subtitle={"ひとり親世帯かどうか"}
        />
        <Stack spacing={2}>
          <SelectInputInfo
            onChange={onNumberOfChildrenChange}
            values={numberOfChildrenRange}
            subtitle={"こどもの人数は何人か"}
            currentValue={inputInfo.generalInfo.numberOfChildren}
          />
          {Array.from({ length: inputInfo.generalInfo.numberOfChildren }).map(
            (_, index) => (
              <InputAge
                onChange={onAgeOfChildrenChange}
                key={index}
                index={index}
                currentVal={inputInfo.generalInfo.ageOfChildren[index]}
              ></InputAge>
            )
          )}
        </Stack>
        <StepTitle>Step2 父の情報を入力</StepTitle>
        <InputIncome
          onChange={onIndividualInfoChange}
          familyId={Family.FATHER}
        />
        <StepTitle>Step3 母の情報を入力</StepTitle>
        <InputIncome
          onChange={onIndividualInfoChange}
          familyId={Family.MOTHER}
        />
        <StepTitle>Step4 保育料シミュレーション結果</StepTitle>
        <Stack>
          <LayerTable>{layer}</LayerTable>
          <Stack spacing={3}>
            {Array.from({ length: inputInfo.generalInfo.numberOfChildren }).map(
              (_, index) => (
                <NurseryFeeTable
                  key={index}
                  a={nurseryFee_a[index]}
                  b={nurseryFee_b[index]}
                  c={nurseryFee_c[index]}
                ></NurseryFeeTable>
              )
            )}
          </Stack>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            mt: 1,
          }}
        >
          ※保育時間9時間の場合の金額です。
        </Typography>
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
          onClick={setResult}
        >
          保育料を計算する&nbsp;
          <CalculateIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
