import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import CartContext from "../context/CartContext";

function Detail() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('synopsis');
  const [addTab, setAddTab] = useState(true);
  const [image, setImage] = useState('');

  const {addToCart} = useContext(CartContext);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.jikan.moe/v4/manga/${params.id}`);
    const detailData = await data.json();
    setDetails(detailData.data);
    console.log(detailData.data);
    const image = detailData.data.images.jpg.large_image_url;
    setImage(image);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={image}/>
      </div>

      <Info>
        <Button 
          className={activeTab === 'synopsis' ? 'active' : ''}
          onClick={() => setActiveTab('synopsis')} 
        >
          Synopsis
        </Button>

        <Button 
          className={activeTab === 'rate' ? 'active' : ''}
          onClick={() => setActiveTab('rate')} 
        >
          Rate
        </Button>

        {addTab && (
          <Button 
            onClick={() => {
              addToCart(details.mal_id, details.title, image);
              setAddTab(false);
            }}
          >
            Favourites
          </Button>
        )}
  
        {activeTab === 'synopsis' && (
          <div>
            <h3 dangerouslySetInnerHTML={ {__html: details.background} } ></h3>
            <h3 dangerouslySetInnerHTML={ {__html: details.synopsis} } ></h3>
          </div>
        )}
        {activeTab === 'rate' && (
          <div>
            <h3>Rank: {details.rank}</h3>
            <h3>Popularity: {details.popularity}</h3>
            <h3>Score: {details.score}</h3>
            <h3>Source: {details.status}</h3>
            <h3>Likes: {details.favorites}</h3>
          </div>
        )}
      
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top:  2rem;
  }
`;

const Button = styled.button`
  padding:  1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  :hover{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Detail