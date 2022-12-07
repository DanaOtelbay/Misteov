import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import {Link} from 'react-router-dom';

function Favourites() {
   const {items} = useContext(CartContext);
   const {removeFromCart} = useContext(CartContext);

   return (
      <div>
         <div>Favourites</div>
         <div>
            {items.map((item) => (
               <div>
                  <Link to={'/detail/' + item.id}>
                     <h2>{item.title}</h2>
                     <img src={item.image} alt={item.title}></img>
                  </Link>
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