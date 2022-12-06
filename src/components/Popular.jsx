import React from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import Card from './Card';

function Popular() {

   const [popular, setPopular] = React.useState([]);

   React.useEffect(() => {
      getPopular();
   }, []);

   const getPopular = async() => {

      const check = localStorage.getItem('popular');

      if(check){
         setPopular(JSON.parse(check));
      }else{
         const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`);
         const data = await api.json();

         localStorage.setItem('popular', JSON.stringify(data.recipes));
         setPopular(data.recipes);
         console.log(data.recipes);
      }
   }

   return (
      <div>
         <Wrapper>
            <h3>Popular Picks</h3>

            <Splide 
               options={{
                  perPage: 4,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "5rem",
               }}
            >
               {popular.map((recipe) => {
                  return(
                     <SplideSlide key={recipe.id}>
                        <Card 
                           id={recipe.id}
                           title={recipe.title}
                           image={recipe.image}
                        ></Card>
                     </SplideSlide>
                  );
               })}
            </Splide>

         </Wrapper>
      </div>
   );
}

const Wrapper = styled.div`
   margin: 4rem 0rem;
`;

export default Popular