import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInputPlace from './ChatInputPlace'
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import { useMessages } from '../../hooks/useMessages'; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 65%;
    height: 100%;
    `;


export default function Chat({init}) {
       

    const initial = JSON.parse(sessionStorage.getItem('current_user'))
    const alt = init?.[0];
    const user_id = useSelector((state)=> state.userId.value) || initial||alt;
    
    
    const data = useMessages(user_id.id);
       
    
    const filter = data.filter(obj =>{
        return obj.user===user_id.id;
    });
    
    
    return (
        <Container>
            <ChatHeader id={user_id.id} photo={user_id.user_photo}></ChatHeader>
            
            {filter && <ChatBody data={filter} photo={user_id.user_photo} messages={ data} />}
            
            <ChatInputPlace></ChatInputPlace>
        </Container>
    )
}
