import React from 'react'
import styled from 'styled-components'


export default function ChatHeader() {
    const ChatHeader = styled.div`
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
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    margin-left: 2vw;
    `;
    const UserTitle = styled.div`
    width: fit-content;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 5vh;
    `;
    const title = 'USER_NAME';
  return (
      <ChatHeader>
          <UserAvatar></UserAvatar>
          <UserTitle>{ title }</UserTitle>
    </ChatHeader>
  )
}
