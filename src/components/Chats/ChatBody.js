import React from 'react';
import styled, { keyframes } from 'styled-components';
import InChatMessage from './InChatMessage';
import OutChatMessage from './OutChatMessage';
import { useEffect, useState } from 'react';
import { ReactComponent as Cancel} from '../Icons/close.svg'

const Body = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    background-color: #f8f8f8;
    overflow-y: scroll;
    ::-webkit-scrollbar {  
     width: 10px;  
    }; 
    ::-webkit-scrollbar-track { 
    background-color: transparent; 
    border-radius: 100px;
    };

    ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 100px; 
    };
    &:hover{
        ::-webkit-scrollbar-track { 
    background-color: #e4e4e4;
        }
    };
    scrollbar-gutter: stable;
     
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
const Shake = keyframes`

from {
    transform: translateY(1vh);
}
to { 
    transform: translateY(70vh);
}
`;
const Notification = styled.div`
    position: fixed;
    display: ${props => props.alarm?'flex' : 'none'};
    flex-direction: row;
    width: 30vh;
    height: 10vh;
    background-color: #383838;
    border: 1px solid gainsboro;
    border-radius: 2vh;
    color: white;
    font-size: 1em;
    font-weight: 400;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 2vh;
    padding-left: 2vh;
    margin-top: 3vh;
    margin-right: 0;
    z-index: 4;
    /* transition: all 1s ease-out; */
    /* transform: translateY(10vh); */
    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
    animation: ${Shake} 1s ease-in forwards;
    cursor: pointer;
        &:hover {transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
        &:active {
        transform: scale(0.96);
        filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
}
};
    `;
// const Button = styled.div`
//   height: 3vh;
//   width: 3vh;
//   border-radius: 50%;
//   cursor: pointer;
        /* &:hover {transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
        &:active {
        transform: scale(0.96);
        filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
}
}; */
  // `

export default function ChatBody({data, photo, messages}) {
    const [alarm, setAlarm] = useState(false);
    // const [number, setNumber] = useState(null);
  const incoming = messages.filter(obj => {return obj.is_delayed===true })
  const lastMessage = React.useRef(null);
  console.log(incoming.length)
  const notiFication = () => {
    if (incoming.length > 0) {
      setAlarm(true);
      // setNumber(incoming.length)
    }
  }
  const handleNotification = () => {
    setAlarm(false)
  }
  const scrollDown = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { scrollDown(); notiFication() }, [data]);
 
    return (
    
      <Body >
          <Notification onClick={handleNotification} alarm={ alarm }>You have {incoming.length} new message(s) 
          {/* <Button> */}
            <Cancel />
          {/* </Button> */}
        </Notification>
        
        
        <ChatList>
          {data.map((e, i) => {
            
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
