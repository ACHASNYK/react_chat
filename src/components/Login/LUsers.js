import React from 'react';
import styled from 'styled-components';
import LUserHeader from './LUserHeader';
import LUserList from './LUserList';
import ChatsTitle from '../../components/Users/ChatsTitle';


const Container = styled.div`
    position: relative;
    width: 35%;
    height: 100%;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    `;



export default function LUsers({init}) {

    
    
    return (
        <Container>
            <LUserHeader></LUserHeader>
            <ChatsTitle></ChatsTitle>
            
            <LUserList />
            
            
        </Container>
    )
}
