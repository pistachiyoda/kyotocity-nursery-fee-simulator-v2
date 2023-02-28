import { Typography } from "@mui/material";
import React from "react";

export const InputTiltle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      variant="h3"
      sx={{
        padding: "10px 10px 10px 20px",
        margin: "15px 0px",
        fontSize: "16px",
        borderLeft: "solid thick #ebbd66",
        textAlign: "left",
      }}
    >
      {children}
    </Typography>
  );
};
