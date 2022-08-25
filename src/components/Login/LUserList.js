import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
    width: 100%;
    height: 80%;
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



export default function LUserList() {
  
  return (
    <List>
      
    </List>
  )
}
