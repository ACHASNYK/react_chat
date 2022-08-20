import React from 'react'
import styled from 'styled-components'

export default function ChatList() {
    const ChatList = styled.ul`
    list-style: none;
    border: 1px solid black;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    
    `;
  return (
    <ChatList></ChatList>
  )
}
