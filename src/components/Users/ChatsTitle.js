import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    
    background-color: white;
    height: 7em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1em;
    
`;

const Text = styled.div`
font-size: 2em;
font-weight: 400;
color: darkcyan;
`
export default function ChatsTitle() {
  return (
      <Title>
          <Text>
              Chats
          </Text>
    </Title>
  )
}
