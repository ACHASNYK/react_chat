import React from 'react'
import useAuth from '../../hooks/useAuth';
import styled, { keyframes } from 'styled-components';
import MLoginHeader from './MLoginHeader';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    

// const Container = styled.div`
//     width: 30%;
//     height: 40%;
//     margin: auto;
//     background-color: gainsboro;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;

// `;
const Fade = keyframes`

from {
    opacity: 0;
}
to { 
    opacity: 1;
}
`;
const LoginContainer = styled.div`
    position: absolute;
    width: 80%;
    height: 35%;
    background-color: white;
    border-radius: 2vh;
    margin-top: 65%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    animation: ${Fade} 0.5s ease-in forwards;
    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
`
const Title = styled.div`
    font-size: 2em;
    font-weight: 400;
    color: #383838;
    animation: ${Fade} 0.8s ease-in 0.5s forwards;
`
const Button = styled.div`
width: 16vh;
height: 7vh;
border: 1px solid gainsboro;
background-color: whitesmoke;
border-radius: 2vh;
margin-top: 5vh;
align-items: center;
padding-bottom: 1vh;


&:hover {
        transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
        
    };

&:active {
    transform: scale(0.96);
    filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
};
`;
const Logo = styled.img`
width: 4em;
height: 4em;
border: 50%;

object-fit: contain;
`
export default function MLogin() {

    const { login } = useAuth();
  return (
      
      <Container>
          
              
              <LoginContainer>
                  <Title>please, login to chat with your Google account, thank you!</Title>
              <Button onClick={login}><Logo src='https://i.pngimg.me/thumb/f/720/m2i8Z5Z5Z5m2i8d3.jpg'></Logo>
                  </Button>
              </LoginContainer>
          <MLoginHeader />
          
          </Container>
      
  )
}
