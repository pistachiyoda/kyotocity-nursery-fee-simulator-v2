import { InputTiltle } from "./InputTitle";
import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export const SelectInputInfo: React.FC<{
  onChange: (val: number) => void;
  values: number[];
  subtitle: string;
  currentValue: number;
}> = ({ onChange, values, subtitle, currentValue }) => {
  return (
    <>
      <InputTiltle>{subtitle}</InputTiltle>
      <FormControl fullWidth>
        <Select
          value={currentValue}
          onChange={(event) => onChange(Number(event.target.value))}
        >
          {values.map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
