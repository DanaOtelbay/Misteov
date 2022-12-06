import React from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import Card from './Card';

function Veggie() {
  const [veggie, setVeggie] = React.useState([]);

  React.useEffect(() => {
     getVeggie();
  }, []);

  const getVeggie = async() => {

     const check = localStorage.getItem('veggie');

     if(check){
        setVeggie(JSON.parse(check));
     }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`);
        const data = await api.json();

        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
     }
  }

  return (
    <div>
         <Wrapper>
            <h3>Our Veggie Picks</h3>

            <Splide 
               options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "5rem",
               }}
            >
               {veggie.map((recipe) => {
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
  )
}

const Wrapper = styled.div`
   margin: 4rem 0rem;
`;

export default Veggie