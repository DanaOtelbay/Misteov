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
                  </Link>
               </Card>
            );
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

export default Top