import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { InputTiltle } from "./InputTitle";
import { Family } from "../models/family";

export const InputIncome: React.FC<{
  familyId: number;
  onChange: (familyId: number, val: number) => void;
}> = ({ familyId, onChange }) => {
  const onChangeInputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(familyId, Number(event.target.value) * 10000);
  };
  const familyIdentity = familyId === Family.FATHER ? "父" : "母";
  return (
    <>
      <InputTiltle>{familyIdentity + "の年収を入力する"}</InputTiltle>
      <TextField
        fullWidth
        onChange={onChangeInputNumber}
        placeholder="0"
        InputProps={{
          endAdornment: <InputAdornment position="end">万円</InputAdornment>,
        }}
      ></TextField>
    </>
  );
};
