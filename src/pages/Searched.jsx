import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

   const [seached, setSearchedMangas] = useState([]);
   let params = useParams();

   const getSearched = async(name) => {
      const data = await fetch(
         `https://api.jikan.moe/v4/manga?q=${name}`
      );
      const mangas = await data.json();
      console.log(mangas.data);
      setSearchedMangas(mangas.data);
   };

   useEffect(() => {
      getSearched(params.search);
   }, [params.search]);

   return (
      <Grid>
         {
            seached.map((item) => {
               let show = true;
               for(let i = 0; i < item.genres.length; i++){
                  if(item.genres[i].name === "Ecchi" || item.genres[i].name === "Erotica" || item.genres[i].name === "Hentai"){
                     show = false;
                  }
               }
               if(show){
                  return(
                     <Card key={item.mal_id}>
                        <Link to={'/detail/' + item.mal_id}>
                           <img src={item.images.jpg.large_image_url}></img>
                        </Link>
                     </Card>
                  );
               }
            })
         }
      </Grid>
   );
}

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-gap: 3rem;
   margin: 2rem;
`;

const Card = styled.div`
   min-height: 25rem;
   border-radius: 2rem;
   overflow: hidden;
   position: relative;

img{
   border-radius: 2rem;
   position: absolute;
   left: 0;
   object-fit: cover;
   width: 100%;
   height: 100%;
}`;

export default Searched