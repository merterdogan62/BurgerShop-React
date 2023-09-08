import React from "react";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function MenuItem({ image, name, content, price }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));
  return (
    <Grid container className=" d-flex flex-column">
      <Grid item>
        <Item style={{ height: "100px" }}>
          <img src={image} height="100px" alt={name} />
        </Item>
      </Grid>

      <Grid item>
        <Item>{name}</Item>
      </Grid>
      <Grid item>
        <Item>{content}</Item>
      </Grid>
      <Grid item>
        <Item>{price}</Item>
      </Grid>
    </Grid>
  );
}
