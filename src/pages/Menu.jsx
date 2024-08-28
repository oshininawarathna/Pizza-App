import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItems from "../components/MenuItems/MenuItems";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        {" "}
        <h1>Our Menu</h1>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItems
              key={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
