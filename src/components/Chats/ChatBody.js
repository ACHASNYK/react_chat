import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    
    `;

export default function ChatBody(messages) {
  
    
    return (
        console.log(messages),
      <Body>
          <ChatList/>              
          
    </Body> 
  )
}
