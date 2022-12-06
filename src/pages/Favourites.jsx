import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Favourites() {
   const {items} = useContext(CartContext);
   const {removeFromCart} = useContext(CartContext);

   return (
      <div>
         <div>Favourites</div>
         <div>
            {items.map((item) => (
               <div>
                  <h2>{item.title}</h2>
                  <img src={item.image} alt={item.title}></img>
                  <button 
                     onClick={() => removeFromCart(item.id, item.title, item.image)}
                  >Remove from Favourites</button>
               </div>
            ))

            }
         </div>
      </div>
   );
}

export default Favourites