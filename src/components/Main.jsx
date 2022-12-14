import React from 'react';
import styled from "styled-components";
import '@splidejs/splide/dist/css/splide.min.css';
import Card from './Card';
import {motion} from 'framer-motion';

function Main() {
  const [main, setMain] = React.useState([]);

  React.useEffect(() => {
     getMain();
  }, []);

  const getMain = async() => {
      const api = await fetch(`https://api.jikan.moe/v4/manga?limit=25`);
      const d = await api.json();
      setMain(d.data);
  }

  return (
      <div>
         <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}

         >
            {main.map((manga) => {
               let show = true;
               for(let i = 0; i < manga.genres.length; i++){
                  if(manga.genres[i].name === "Ecchi" || manga.genres[i].name === "Erotica" || manga.genres[i].name === "Hentai"){
                     show = false;
                  }
               }
               if(show){
                  return(
                     <Card key={manga.mal_id} 
                        id={manga.mal_id}
                        title={manga.title}
                        image={manga.images.jpg.large_image_url}
                     ></Card>
                  );
               }
            })}
         
         </Grid>
      </div>
   )
}
const Grid = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-gap: 3rem;
   margin: 2rem;
`;

export default Main