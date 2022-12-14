import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {MdDelete } from 'react-icons/md';

function Favourites() {
   const {items} = useContext(CartContext);
   const {removeFromCart} = useContext(CartContext);

   return (
       <Grid
         animate={{opacity: 1}}
         initial={{opacity: 0}}
         exit={{opacity: 0}}
         transition={{duration: 0.5}}

      >
            {items.map((item) => {
               return(
                  <Card key={item.mal_id}>
                  <Link to={'/detail/' + item.id}>
                     <img src={item.image} alt={item.title}></img>
                  </Link>
                  <h4>{item.title}  <button 
                     onClick={() => removeFromCart(item.id, item.title, item.image)}
                  >  <MdDelete/> </button>
                     </h4>
                 
              </Card>
            );
         })}
      </Grid>
   );
}

const Grid = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-gap: 2rem;
   margin: 2rem;
`;

const Card = styled.div`
   img{
      width: 250px;
      border-radius: 2rem;
      height: 400px;
   }

   h4{
      padding: 1rem;
   }

   button{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius:  50%;
      text-decoration: none;
      background: linear-gradient(35deg, #FA8072,#B22222);
      cursor: pointer;
   }

   svg{
      color: white;
      font-size: 1rem;
   }
`;

export default Favourites