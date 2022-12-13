import {FaExclamation} from 'react-icons/fa';
import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillHeart, AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';

function Category() {
   return (
      <List>
         <SLink to={'/top/top'}>
            <FaExclamation />
            <h4>Top Manga</h4>
         </SLink>
         <SLink to={'/genres/publishing'}>
            <RxDotsHorizontal />
            <h4>Ongoing</h4>
         </SLink>
         <SLink to={'/genres/bypopularity'}>
            <AiOutlineStar />
            <h4>Popular</h4>
         </SLink>
         <SLink to={'/favourites'}>
            <AiFillHeart />
            <h4>Favourites</h4>
         </SLink>
      </List>
  )
}

const List = styled.div`
   display: flex;
   justify-content: center;
   margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius:  50%;
   margin-right: 2rem;
   text-decoration: none;
   background: linear-gradient(35deg, #494949, #313131);
   width: 6rem;
   height: 6rem;
   cursor: pointer;
   transform: scale(0.8);

   h4{
      color: white;
      font-size: 0.8rem;
   }

   svg{
      color: white;
      font-size: 1.5rem;
   }

   &.active{
      background: linear-gradient(35deg, #FA8072,#B22222);
   
      svg{
         color: white;
      }

      h4{
         color: white;
      }
   }
`;

export default Category