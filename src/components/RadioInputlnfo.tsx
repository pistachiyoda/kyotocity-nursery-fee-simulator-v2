import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { InputTiltle } from "./InputTitle";

export const RadioInputInfo: React.FC<{
  onChange: (val: boolean) => void;
  subtitle: string;
}> = ({ subtitle, onChange }) => {
  return (
    <>
      <InputTiltle>{subtitle}</InputTiltle>
      <FormControl>
        <RadioGroup
          row
          defaultValue={false}
          onChange={(event) => onChange(JSON.parse(event.target.value))}
        >
          <FormControlLabel value={true} control={<Radio />} label="はい" />
          <FormControlLabel value={false} control={<Radio />} label="いいえ" />
        </RadioGroup>
      </FormControl>
    </>
  );
};
