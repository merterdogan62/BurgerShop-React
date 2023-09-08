import React from "react";
import { burgers } from "../../data/BurgerData";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="menu flex">
      <div className="menu-title">
        <h1>Burgers</h1>
        <div className="menu-list d-flex flex-wrap">
          {burgers.map((burger, index) => {
            return (
              <MenuItem
                name={burger.name}
                image={burger.image}
                content={burger.content}
                price={burger.price}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
