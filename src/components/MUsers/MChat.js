import React from 'react'
import ChatHeader from './MChatHeader'
import ChatBody from './MChatBody'
import ChatInputPlace from './MChatInputPlace'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { db } from '../../services/firebase';
// import { getDocs, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useCollection } from '../../hooks/useCollection';
import { useMessages } from '../../hooks/useMessages'; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid gainsboro; */
    width: 100%;
    height: 100%;
    `;


export default function MChat({init}) {
       

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
            {/* {error&&<ErrorLoading>{error}</ErrorLoading>} */}
            {/* {pending&&<Loading>Loading...</Loading>} */}
            {filter && <ChatBody data={filter} photo={user_id.user_photo} messages={ data} />}
            {/* {data&&console.log(data)} */}
            <ChatInputPlace></ChatInputPlace>
        </Container>
    )
}
