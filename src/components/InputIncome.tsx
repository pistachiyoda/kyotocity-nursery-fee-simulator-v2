import { TextField } from "@mui/material";
import React from "react";

export const InputIncome: React.FC<{
  onChange: (val: number) => void;
}> = ({ onChange }) => {
  const onChangeInputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };
  return <TextField fullWidth onChange={onChangeInputNumber}></TextField>;
};
