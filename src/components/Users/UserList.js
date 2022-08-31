import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import UserItem from './UserItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    background-color: white;
    overflow-y: scroll;
    ::-webkit-scrollbar {  
     width: 8px;  
    }; 
    ::-webkit-scrollbar-track { 
    background-color: transparent; 
    border-radius: 100px;
    };

    ::-webkit-scrollbar-thumb {
    background-color: gainsboro;
    border-radius: 100px; 
    };
    &:hover{
        ::-webkit-scrollbar-track { 
    background-color: whitesmoke;
        }
    };
    scrollbar-gutter: stable;
`;
const List = styled.ul`
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
    width: 100%;
    /* height: 80%; */
    
     
`;



export default function UserList({data, messages, all}) {
    
   useEffect(() => {
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [messages]);
 
 
  return (
    <Container>
      {/* <div ref={lastMessage}></div> */}
        <List>
      
      {data&&data.map((e, i) => {
        return (<UserItem key={i}
          data={e}
          messages={all }
           />)
      })}
      
      
    </List>
  </Container>  
  )
}
