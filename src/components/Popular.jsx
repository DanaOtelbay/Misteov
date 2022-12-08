import React from 'react';
import styled from "styled-components";
import '@splidejs/splide/dist/css/splide.min.css';
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
               {popular.map((manga) => {
                  return(
                        <Card 
                           id={manga.mal_id}
                           title={manga.title}
                           image={manga.images.jpg.large_image_url}
                        ></Card>
                  );
               })}

         </Wrapper>
      </div>
   );
}

const Wrapper = styled.div`
   margin: 5rem 2rem;
`;

export default Popular