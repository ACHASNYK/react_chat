import React from 'react';
import styled from 'styled-components';



const Body = styled.div`
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
    
 


export default function LChatBody() {
   
    return (
    
      <Body >
          
    </Body> 
  )
}
