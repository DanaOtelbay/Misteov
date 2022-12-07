import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Top() {
   const [top, setTop] = React.useState([]);
   let params = useParams();

   const getTop = async(name) => {
      const data = await fetch(`https://api.jikan.moe/v4/${name}/manga`);
      const mangas = await data.json();
      setTop(mangas.data);
      console.log(mangas.data);
   };

   React.useEffect(() => {
      getTop(params.type);
   }, [params.type]);

   return (
      <Grid
         animate={{opacity: 1}}
         initial={{opacity: 0}}
         exit={{opacity: 0}}
         transition={{duration: 0.5}}

      >
         {top.map((item) => {
            return(
               <Card key={item.mal_id}>
                  <Link to={'/detail/' + item.mal_id}>
                     <img src={item.images.jpg.large_image_url} />
                     <h4>{item.title}</h4>
                     <p>Score: {item.score}</p>
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

export default Top