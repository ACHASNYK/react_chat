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
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
    border: 1px solid gainsboro;
    margin-left: 3vh;
  `;
  const UserPhoto = styled.img`
    object-fit: contain;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
  `;

const InUserMessage = styled.div`
  min-width: 15vh;
  /* text-align: center; */
  max-width: 60%;
  margin-left: 5vh;
  border: 1px solid #383838;
  border-radius: 5vh;
  padding: 2vh;
  background-color: #383838;
  color: white;
  font-size: 1em;
  font-weight: 400 ;
  `;
const DateLabel = styled.div`
  text-align: left;
  padding-left: 15vh;
  font-size: 1em;
  font-weight: 200;
  color: #383838;
`

export default function MInChatMessage({value, photo, timestamp}) {
  
  const stamp = (date) => {
    const newDate = new Date(date?.seconds*1000)
    return newDate.toLocaleString();
  }
  return (
    <>
      <Container>
      <UserAvatar>
        <UserPhoto alt='image' src={photo} ></UserPhoto>  
      </UserAvatar>
      <InUserMessage>{value}</InUserMessage> 
       </Container>
      <DateLabel>{stamp(timestamp)}</DateLabel>
    </>  
  )
}
