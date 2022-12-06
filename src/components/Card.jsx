import React, { useContext } from 'react';
import styled from "styled-components";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import CartContext from '../context/CartContext';
import { AiFillHeart } from "react-icons/ai";

function Card({id, title, image}) {
  const {addToCart} = useContext(CartContext);

  return (
      <CardStyle>
        <Link to={'/recipe/' + id}>
          <p>{title}</p>
          <img src={image} alt={title} />
          <Gradient/>
        </Link>
      </CardStyle>
  )
}

const CardStyle = styled.div`
   min-height: 25rem;
   border-radius: 2rem;
   overflow: hidden;
   position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left:50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
   z-index: 4;
   position: absolute;
   width: 100%;
   height: 100%;
   background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Card