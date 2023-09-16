import React from "react";
import { burgers } from "../../../data/BurgerData";
import MenuItem from "./MenuItem";
import { Box } from "@mui/material";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-title d-flex justify-content-center">
        <h1>Burgers</h1>
      </div>
      <div className="menu-list d-flex flex-wrap">
        {burgers.map((burger) => {
          return (
            <Box
              key={burger.id}
              sx={{
                width: { xs: "100%", sm: "40%", md: "30%" },
                margin: "5px auto 5px auto",
                justifyContent: "space-between",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="border">
              <MenuItem
                name={burger.name}
                image={burger.image}
                content={burger.content}
                price={burger.price}
              />
            </Box>
          );
        })}
      </div>
    </div>
  );
}
