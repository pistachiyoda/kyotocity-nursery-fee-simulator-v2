import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export const NurseryFeeTable: React.FC<{
  a: number;
  b: number;
  c: number;
  index: number;
  age: number;
}> = ({ a, b, c, index, age }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontSize: "16px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        {index + 1}人目の子供 （{age}歳）
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                保育所・保育所型認定こども園
              </TableCell>
              <TableCell>{a}円</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                小規模保育事業所等
              </TableCell>
              <TableCell>{b}円</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                幼稚園型認定こども園
              </TableCell>
              <TableCell>{c}円</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
