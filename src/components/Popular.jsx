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
      const api = await fetch(`https://api.jikan.moe/v4/manga?limit=20`);
      const d = await api.json();
      setPopular(d.data);
      console.log(d);
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
               {popular.map((manga) => {
                  return(
                     <SplideSlide key={manga.mal_id}>
                        <Card 
                           id={manga.mal_id}
                           title={manga.title}
                           image={manga.images.jpg.large_image_url}
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