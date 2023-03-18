import React from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { ItemName } from "./ItemName";

export const InputAge: React.FC<{
  currentVal: number;
  index: number;
  onChange: (val: number, index: number) => void;
}> = ({ onChange, currentVal, index }) => {
  const ages = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ItemName>{index + 1}人目の年齢</ItemName>
        <FormControl>
          <Select
            value={currentVal}
            onChange={(event) => onChange(Number(event.target.value), index)}
            sx={{ marginRight: "10px" }}
          >
            {ages.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <span>歳</span>
      </Box>
    </>
  );
};
