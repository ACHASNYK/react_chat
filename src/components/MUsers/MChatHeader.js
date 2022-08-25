import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 15vh;
    border: 1px solid gainsboro;
    box-shadow: 2px solid black;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2%;
    
    `;
    const UserAvatar = styled.div`
    box-sizing: border-box;
    border: 1px solid gainsboro;
    
    width: 9vh;
    height: 9vh;
    border-radius: 50%;
    margin-left: 2vw;
    `;

    const UserPhoto = styled.img`
      object-fit: contain;
      width: 9vh;
      height: 9vh;
      border-radius: 50%;
    `
    const UserTitle = styled.div`
    width: fit-content;
    text-align: center;
    
    padding-bottom: 1vh;
    font-size: 1.5em;
    font-weight: 400;
    
    `;

const Backbutton = styled.div`
   
    width: 15vh;
    height: 6vh;
    border: 1px solid gainsboro;
    background-color: whitesmoke;
    border-radius: 2vh;
    margin-left: 5vh;
    text-align: center;
    font-size: 1.3em;
    padding-top: 2vh;
    &:hover {
        transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
        
    };

&:active {
    transform: scale(0.96);
    filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
};
    `

export default function MChatHeader({id, photo}) {
    
    
  return (
      <Container>
          <UserAvatar>
            <UserPhoto alt='user photo' src={photo}/>
          </UserAvatar>
      <UserTitle>{id}</UserTitle>
      <Link to="/" className='links' >
        <Backbutton>Back</Backbutton>
      </Link>  
    </Container>
  )
}
