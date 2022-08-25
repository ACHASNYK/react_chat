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
            <LChatHeader id='unauthorized user' photo={'https://www.pngitem.com/pimgs/m/105-1050694_user-placeholder-image-png-transparent-png.png' }></LChatHeader>
            
            <LChatBody/>
            
            <LChatInputPlace></LChatInputPlace>
        </Container>
    )
}
