import { Typography } from "@mui/material";
import React from "react";

export const StepTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      variant="h2"
      sx={{
        backgroundColor: "#ddc5e7",
        padding: "10px 10px 10px 20px",
        margin: "15px 0px",
        fontSize: "18px",
        textAlign: "left",
      }}
    >
      {children}
    </Typography>
  );
};
