import React from 'react'
import styled from 'styled-components'

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

export default function LChatHeader() {
    
    
  return (
      <Container>
          <UserAvatar>
            <UserPhoto src='https://www.pngitem.com/pimgs/m/105-1050694_user-placeholder-image-png-transparent-png.png'/>
          </UserAvatar>
          <UserTitle>unknown and unauthorized user</UserTitle>
    </Container>
  )
}
