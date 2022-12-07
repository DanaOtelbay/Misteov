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
                     <p>Score: {item.score}</p>
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

export default Genres