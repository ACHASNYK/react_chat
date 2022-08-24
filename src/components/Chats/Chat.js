import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInputPlace from './ChatInputPlace'
import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import { db } from '../../services/firebase';
// import { getDocs, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useCollection } from '../../hooks/useCollection';
import { useMessages } from '../../hooks/useMessages'; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid gainsboro; */
    width: 65%;
    height: 100%;
    `;
// const ErrorLoading = styled.div`
// margin-top: 50%;
// margin-right: 50%;
// width: fit-content;
// color: #383838;
// font-size: 2em;
// font-weight: 400;
// `;

// const Loading = styled.div`
// margin-top: 50%;
// margin-right: 50%;
// width: fit-content;
// color: #383838;
// font-size: 2em;
// font-weight: 400;
// `;

export default function Chat({init}) {
    
    

    // const [data, setData] = useState();
    // const [pending, setPending] = useState(false);
    // const [error, setError] = useState()
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
            {filter&&<ChatBody data={filter} photo={user_id.user_photo}/>}
            {/* {data&&console.log(data)} */}
            <ChatInputPlace></ChatInputPlace>
        </Container>
    )
}
