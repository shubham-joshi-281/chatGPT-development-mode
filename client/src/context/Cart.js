// import { useState, useContext, createContext } from "react";
// import { useFaker } from "react-faker";
// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const products = [...Array(20)].map(() => ({
//     id: useFaker.datatype.uuid(),
//     name: useFaker.commerce.productName(),
//     price: useFaker.commerce.price(),
//     image: useFaker.random.image(),
//     fastDelivery: useFaker.datatype.boolean(),
//   }));
//   //   const [cart, setCart] = useState("0");
//   return (
//     <CartContext.Provider value={[products]}>{children}</CartContext.Provider>
//   );
// };

// const useCart = () => useContext(CartContext);

// export { useCart, CartProvider };
