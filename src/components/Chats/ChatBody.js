import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';
import ChatMessage from './InChatMessage';

export default function ChatBody(messages) {

    const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
    height: 80%;
    `;
    
    return (
        console.log(messages),
      <ChatBody>
          <ChatList>
              {/* {messages.forEach((element, i) => { 
                  <ChatMessage key={ i}>{ element.name}</ChatMessage>
              })} */}
          </ChatList>
    </ChatBody> 
  )
}
