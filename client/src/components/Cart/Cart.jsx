import React from "react";
import { useTheme } from "../../context/Theme";

const Cart = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      <h1>cart {theme}</h1>
    </div>
  );
};

export default Cart;
