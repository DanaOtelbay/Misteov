import React, { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
   const [items, setItems] = useState([]);

   const addToCart = (id, title, image) => {
      const index = items.findIndex((mymanga) => {
         return mymanga.id === id;
      })
      
      if(index < 0){
         const newArray = [...items,  {id, title, image}];
         setItems(newArray);
      }
   }

   const removeFromCart = (id, title, image) => {
      const newArray = items.filter((item) =>{
         return item.id !== id;
      })

      setItems(newArray);
   }

   return (
      <CartContext.Provider value={{items, addToCart, removeFromCart}}>
         {children}
      </CartContext.Provider>
   )
}

export default CartContext