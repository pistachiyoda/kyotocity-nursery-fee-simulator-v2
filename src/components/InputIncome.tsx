import { TextField } from "@mui/material";
import React from "react";

export const InputIncome: React.FC<{
  familyId: number;
  onChange: (familyId: number, val: number) => void;
}> = ({ familyId, onChange }) => {
  const onChangeInputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(familyId, Number(event.target.value));
  };
  return <TextField fullWidth onChange={onChangeInputNumber}></TextField>;
};
