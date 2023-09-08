import React from "react";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function MenuItem({ image, name, content, price, index }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "40%", md: "30%" },
        margin: "5px auto 5px auto",
        justifyContent: "space-between",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      className="border">
      <Grid container className=" d-flex flex-column">
        <Grid item key={index}>
          <Item style={{ height: "100px" }}>
            <img src={image} height="100px" alt={name} />
          </Item>
        </Grid>

        <Grid item key={index}>
          <Item>{name}</Item>
        </Grid>
        <Grid item key={index}>
          <Item>{content}</Item>
        </Grid>
        <Grid item key={index}>
          <Item>{price}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
