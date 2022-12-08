import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

   const [seached, setSearchedRecipes ] = useState([]);
   let params = useParams();

   const getSearched = async(name) => {
      const data = await fetch(
         `https://api.jikan.moe/v4/manga?q=${name}`
      );
      const recipes = await data.json();
      console.log(recipes.data);
      setSearchedRecipes(recipes.data);
   };

   useEffect(() => {
      getSearched(params.search);
   }, [params.search]);

   return (
      <Grid>
         {
            seached.map((item) => {
               if(item.explicit_genres.length === 0){
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
   grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
   grid-gap: 3rem;
`;

const Card = styled.div`

img{
   width: 100%;
   border-radius: 2rem;
   height: 40vh;
}

   a{
      text-decoration: none;
   }

   h4{
      text-align: center;
      padding: 1rem;
   }
`;

export default Searched