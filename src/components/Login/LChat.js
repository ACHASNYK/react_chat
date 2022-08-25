import React from 'react'
import LChatHeader from './LChatHeader';
import LChatBody from './LChatBody';
import LChatInputPlace from './LChatInputPlace';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid gainsboro; */
    width: 65%;
    height: 100%;
    `;




export default function LChat({init}) {
    
       
    
    
    return (
        <Container>
            <LChatHeader id='unauthorized user' photo={'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated-white-background-good-man-102846161.jpg' }></LChatHeader>
            
            <LChatBody/>
            
            <LChatInputPlace></LChatInputPlace>
        </Container>
    )
}
