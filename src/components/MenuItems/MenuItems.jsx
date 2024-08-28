import React from "react";

const MenuItems = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h3>${price}</h3>
    </div>
  );
};

export default MenuItems;
