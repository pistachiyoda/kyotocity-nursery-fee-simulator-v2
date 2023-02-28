import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const LayerTable: React.FC = () => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell component="th" sx={{ textAlign: "center" }}>
            階層区分
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ textAlign: "center" }}>22 階層</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
