import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;

    align-items: center;
    padding-top: 3vh;
    padding-bottom: 1vh;
       
    `;
  
const OutUserMessage = styled.div`
  min-width: 15vh;
  padding: 2vh;
  margin-right: 5vh;
  border: 1px solid gainsboro;
  border-radius: 5vh;
  
  background-color: gainsboro;
  color: #383838;
  font-size: 1.5em;
  font-weight: 400;
  `;
const DateLabel = styled.div`
  text-align: right;
  padding-right: 5vh;
  font-size: 1em;
  font-weight: 200;
  color: #383838;
`

export default function OutChatMessage() {
    
  return (
    <>
     <Container>
      <OutUserMessage>Hello!</OutUserMessage>
      </Container>
      <DateLabel>08/20/2022, 15:24</DateLabel>
    </>
  )
}