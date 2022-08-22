import React from 'react';
import Users from './Users/Users';
import Chat from './Chats/Chat';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    
    `;

export default function Main() {
    // const init = {id:'Josefina', user_photo: ''}
   
    
    return (
        
            <Container>
                <Users></Users>
                <Chat ></Chat>
            </Container>
        
    )


}
