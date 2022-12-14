import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Genres() {
   const [genre, setGenre] = React.useState([]);
   let params = useParams();

   const getCuisine = async(name) => {
      const data = await fetch(`https://api.jikan.moe/v4/top/manga?type=manga&filter=${name}`);
      const mangas = await data.json();
      setGenre(mangas.data);
      console.log(mangas.data);
   };

   React.useEffect(() => {
      getCuisine(params.genre);
   }, [params.genre]);

   return (
      <Grid
         animate={{opacity: 1}}
         initial={{opacity: 0}}
         exit={{opacity: 0}}
         transition={{duration: 0.5}}

      >
         {genre.map((item) => {
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
                     <img src={item.images.jpg.large_image_url} />
                     <h4>{item.title}</h4>
                  </Link>
               </Card>
               );
            }
         })}
      </Grid>
   );
}

const Grid = styled(motion.div)`
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
}

h4{
   position: absolute;
   z-index: 10;
   bottom: 0%;
   left: 50%;
   transform: translate(-50%, 0%);
   color: blanchedalmond;
   background-color:black;
   width: 100%;
   text-align: center;
   font-weight: 600;
   font-size: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
}`;

export default Genres