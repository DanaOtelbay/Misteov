import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import CartContext from '../context/CartContext';

function Cuisine() {
   const [cuisine, setCuisine] = React.useState([]);
   const [addTab, setAddTab] = React.useState(true);
   let params = useParams();

   const {addToCart} = React.useContext(CartContext);

   const getCuisine = async(name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };

   React.useEffect(() => {
      getCuisine(params.type);
      console.log(params.type);
   }, [params.type]);

   return (
      <Grid
         animate={{opacity: 1}}
         initial={{opacity: 0}}
         exit={{opacity: 0}}
         transition={{duration: 0.5}}

      >
         {cuisine.map((item) => {
            return(
               <Card key={item.id}>
                  <Link to={'/recipe/' + item.id}>
                     <img src={item.image} />
                     <h4>{item.title}</h4>
                  </Link>
               </Card>
            );
         })}
      </Grid>
   );
}

const Grid = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   grid-gap: 3rem;
`;

const Card = styled.div`
   img{
      width: 100%;
      border-radius: 2rem;
   }

   a{
      text-decoration: none;
   }

   h4{
      text-align: center;
      padding: 1rem;
   }
`;

export default Cuisine