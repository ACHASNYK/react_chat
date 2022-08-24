import React from 'react';
import styled from 'styled-components';
import UserHeader from './UserHeader';
import UserList from './UserList';
import ChatsTitle from './ChatsTitle';
import { db } from '../../services/firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useUpdate } from '../../hooks/useUpdate';


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

export default function Users({init}) {

    // const [data, setData] = useState();
    const [users, setUsers] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState();
    const [list, setList] = useState(users);
    const source = 'chat-app2';
    const alert = useUpdate(source);
    const userList = 
    console.log(alert)
    // console.log(data)
    console.log(users)
    // console.log(incoming)
    console.log(list)
    

    // const  = () => {
    //     const incoming = alert.filter((obj)=>{return obj.is_delayed});

    // }
    const handleChange = (e) =>{
        let point = e.target.value;
    let array = users.filter((obj)=>{return obj.id===point})
        setList(array)
        console.log(list)
        sessionStorage.setItem(JSON.stringify('list', list))
    }
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
        const q = query(collection(db, 'chat-app2'));
        let changes = [];
        
    },[])
    
    
    return (
        <Container>
            <UserHeader handleChange={handleChange} value={list}></UserHeader>
            <ChatsTitle></ChatsTitle>
            {error&&<ErrorLoading>{error}</ErrorLoading>}
            {pending&&<Loading>Loading...</Loading>}
            {users&&<UserList data={users} />}
            
            
        </Container>
    )
}
