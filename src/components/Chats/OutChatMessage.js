import React from 'react'
import styled from 'styled-components'

export default function OutChatMessage() {
    const InChatMessage = styled.div`

    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    `;
  return (
      <InChatMessage>
          
          <OutUserMessage></OutUserMessage>          
    </InChatMessage>
  )
}