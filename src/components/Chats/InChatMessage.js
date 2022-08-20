import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    box-sizing: border-box;
    
    width: 100%;
    max-width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3vh;
    padding-bottom: 1vh;
       
    `;
  const UserAvatar = styled.div`
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    border: 1px solid gainsboro;
    margin-left: 3vh;
  `;
  const UserPhoto = styled.img`
    object-fit: contain;
  `;

const InUserMessage = styled.div`
  min-width: 15vh;
  /* text-align: center; */
  margin-left: 5vh;
  border: 1px solid #383838;
  border-radius: 5vh;
  padding: 2vh;
  background-color: #383838;
  color: white;
  font-size: 1.5em;
  font-weight: 400;
  `;
const DateLabel = styled.div`
  text-align: left;
  padding-left: 15vh;
  font-size: 1em;
  font-weight: 200;
  color: #383838;
`

export default function InChatMessage() {
  
  return (
    <>
      <Container>
      <UserAvatar>
        <UserPhoto alt='image' ></UserPhoto>  
      </UserAvatar>
      <InUserMessage>skjnkjnjf f jlfknlkns dfs nklkn sdf </InUserMessage> 
       </Container>
      <DateLabel>08/20/2022 15:04</DateLabel>
    </>  
  )
}
