import React from 'react';
import styled from 'styled-components';
import InChatMessage from './InChatMessage';
import OutChatMessage from './OutChatMessage';
import { useEffect } from 'react';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    background-color: #f8f8f8;
    overflow-y: scroll;
    
    `;
const ChatList = styled.ul`
    list-style: none;
    
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    width: 100%;
    
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    `;

export default function ChatBody({data, photo}) {
  const lastMessage = React.useRef(null);
  const scrollDown = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollDown, [data]);
 
    return (
    
      <Body >
          <ChatList>
          {data.map((e, i) => {
            // console.log(e.value)
            return e.is_incoming?
            <InChatMessage
            key={i} 
            value={e.value} 
            photo={photo} 
            timestamp={e.timestamp}/> : 
            <OutChatMessage
            key={i} 
            value={e.value}
            timestamp={e.timestamp}
            />
          })}  
          </ChatList>              
          <div ref={lastMessage}></div>
    </Body> 
  )
}
