import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

export const NurseryFeeTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              保育所・保育所型認定こども園
            </TableCell>
            <TableCell>80,000円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              小規模保育事業所等
            </TableCell>
            <TableCell>70,000円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              幼稚園型認定こども園
            </TableCell>
            <TableCell>75,000円</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
