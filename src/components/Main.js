import React from 'react';
import Users from './Users/Users';
import Chat from './Chats/Chat';
import styled from 'styled-components';
import {useEffect, useState} from 'react'
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    
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

export default function Main() {
    const [users, setUsers] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState();
    
    const init1 = {id:'Josefina', user_photo: 'https://i.pravatar.cc/100?img=26'}
    
    useEffect(()=> {

        const dbref = collection(db, 'chat-app')
        
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
                   
                        setUsers(results)
                        setPending(false)
                        // sessionStorage.setItem('current_user', JSON.stringify(results[0]))
                    }
                }, err => {
                    setError(err.message)
                    setPending(false)
                    
                })
    
            }, [])
    
    return (
        
            <Container>
                {error&&<ErrorLoading>{error}</ErrorLoading>}
                {pending&&<Loading>Loading...</Loading>}
                {users&&<Users init={users}></Users>}
                {users&&<Chat init={users}></Chat>}
            </Container>
        
    )


}
