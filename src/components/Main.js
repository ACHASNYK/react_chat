import React from 'react';
import Users from './Users/Users';
import Chat from './Chats/Chat';
import styled from 'styled-components';
import {useEffect, useState} from 'react'
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive'
import MUsers from './MUsers/MUsers';
import MChat from './MUsers/MChat';
import { Route, Routes, BrowserRouter, } from "react-router-dom";

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

const Desktop = styled.div`
    display: flex;
    flex-direction: row;
    width: 99.9%;
    height: 99%;
    
    `;
const Mobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 99.9%;
    height: 99%;
    
    `;


export default function Main() {
    const [users, setUsers] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState();
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    
    useEffect(()=> {

        const dbref = collection(db, 'chat-app')
        
        getDocs(dbref).then((snapshot) =>{
                    if(snapshot.empty) {
                        setError('Sorry no users found please login to chat')
                        setPending(false)
                    }else{
                        let results = [];
                        snapshot.docs.forEach(doc => {
                            // console.log(doc)
                            results.push({...doc.data(), id: doc.id, counter: null})
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
                {pending && <Loading>Loading...</Loading>}
            {isBigScreen && <Desktop>
                {users && <Users init={users}></Users>}
                {users && <Chat init={users}></Chat>}
            </Desktop>}
            {isTabletOrMobile && 
                <Mobile init={users}>
                    <BrowserRouter>
                            <Routes>
                                    <Route exact path="/" element={<MUsers init={users} />} />
                                    <Route exact path="/chat" element={<MChat init={users} />} />
                            </Routes>
                    </BrowserRouter>
                        </Mobile>}
            </Container>
        
    )


}
