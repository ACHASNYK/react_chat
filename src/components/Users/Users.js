import React from 'react';
import styled from 'styled-components';
import UserHeader from './UserHeader';
import UserList from './UserList';
import ChatsTitle from './ChatsTitle';
import { db } from '../../services/firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Container = styled.div`
    width: 35%;
    height: 100%;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
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

export default function Users({handleId}) {

    const [data, setData] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        const dbref = collection(db,'chat-app');
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
                sessionStorage.setItem('current_user', JSON.stringify(results[0]))
            }
        }, err => {
            setError(err.message)
            setPending(false)
            
        })

        
    },[])
    
    return (
        <Container>
            <UserHeader></UserHeader>
            <ChatsTitle></ChatsTitle>
            {error&&<ErrorLoading>{error}</ErrorLoading>}
            {pending&&<Loading>Loading...</Loading>}
            {data&&<UserList data={data}/>}
            
        </Container>
    )
}
