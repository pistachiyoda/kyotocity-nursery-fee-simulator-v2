import { Typography } from "@mui/material";
import React from "react";

export const ItemName: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      variant="h4"
      sx={{
        padding: "10px 10px 10px 20px",
        margin: "15px 0px",
        fontSize: "16px",
        textAlign: "left",
      }}
    >
      {children}
    </Typography>
  );
};
