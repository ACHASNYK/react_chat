import React from 'react'
import styled from 'styled-components'

export default function InChatMessage() {
  const InChatMessage = styled.div`

    box-sizing: border-box;
    border: 1px solid #484848;
    border-radius: 5vh;
    width: ;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    `;
  const UserAvatar = styled.div`
  min-width: 4%;
  min-height: 4%;
  border-radius: 50%;
  `;
  const UserPhoto = styled.img`
  object-fit: contain;
  `;

  const InUserMessage = styled.div`
  width: fit-content;
  padding: 3%;
  margin-left: 2%;
  border: 1px solid grey;
  border-radius: 10%;
  height: 3%;
  background-color: grey;
  color: black;
  `
  return (
      <InChatMessage>
      <UserAvatar>
        <UserPhoto alt='image' ></UserPhoto>  
      </UserAvatar>
          <InUserMessage></InUserMessage>          
    </InChatMessage>
  )
}
