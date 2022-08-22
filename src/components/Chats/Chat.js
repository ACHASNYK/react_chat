import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInputPlace from './ChatInputPlace'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid gainsboro; */
    width: 65%;
    height: 100%;
    `;
const ErrorLoading = styled.div`
margin-top: 50%;
margin-right: 50%;
width: fit-content;
color: #383838;
font-size: 2em;
font-weight: 400;
`;

const Loading = styled.div`
margin-top: 50%;
margin-right: 50%;
width: fit-content;
color: #383838;
font-size: 2em;
font-weight: 400;
`;

export default function Chat({id}) {
    const user333 = useSelector((state)=> state.userId.value);
    const user_id = user333 || JSON.parse(sessionStorage.getItem('current_user'));

    const [data, setData] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        const dbref = collection(db,'chat-app',user_id.id, 'messages');
        getDocs(dbref).then((snapshot) =>{
            if(snapshot.empty) {
                setError('Sorry no users found please login to chat')
                setPending(false)
            }else{
                let results = [];
                snapshot.docs.forEach(doc => {
                    console.log(doc)
                    results.push({...doc.data(), id: doc.id})
                    console.log(results)
                })
                setData(results)
                setPending(false)
               
            }
        }, err => {
            setError(err.message)
            setPending(false)
            
        })

        
    },[user_id.id])
    
    return (
        <Container>
            <ChatHeader id={user_id.id} photo={user_id.user_photo}></ChatHeader>
            {error&&<ErrorLoading>{error}</ErrorLoading>}
            {pending&&<Loading>Loading...</Loading>}
            {data&&<ChatBody data={data} photo={user_id.user_photo}/>}
            <ChatInputPlace></ChatInputPlace>
        </Container>
    )
}
