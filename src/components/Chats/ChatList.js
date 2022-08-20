import React from 'react';
import styled from 'styled-components';
import InChatMessage from './InChatMessage';
import OutChatMessage from './OutChatMessage';

const List = styled.ul`
    list-style: none;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    `;
export default function ChatList() {
    
  return (
    <List>
      <InChatMessage />
      <OutChatMessage />
      <InChatMessage />
      <OutChatMessage/>
    </List>
  )
}
