import React from 'react';
import Users from './Users/Users';
import Chat from './Chats/Chat';
import styled from 'styled-components';
export default function Main() {

    const Main = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    
    `
    return (
        <Main>
            <Users></Users>
            <Chat></Chat>
        </Main>
    )


}
