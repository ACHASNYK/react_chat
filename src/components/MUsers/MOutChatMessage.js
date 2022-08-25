import React from 'react';
import styled from 'styled-components';
import { Timestamp } from 'firebase/firestore';

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
  max-width: 60%;
  background-color: gainsboro;
  color: #383838;
  font-size: 1em;
  font-weight: 500;
  `;
const DateLabel = styled.div`
  text-align: right;
  padding-right: 5vh;
  font-size: 1em;
  font-weight: 200;
  color: #383838;
`

export default function MOutChatMessage({value, timestamp}) {
    const stamp = (date) => {
      const newDate = new Date(date?.seconds*1000)
      return newDate.toLocaleString();
    }
  return (
    <>
     <Container>
      <OutUserMessage>{value}</OutUserMessage>
      </Container>
      <DateLabel>{stamp(timestamp)}</DateLabel>
    </>
  )
}