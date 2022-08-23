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

export default function Users() {

    const [data, setData] = useState();
    const [users, setUsers] = useState();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState();
    const source = 'chat-app2';
    const alert = useUpdate(source);
    
    console.log(alert)
    console.log(data)
    console.log(users)
    
    const AAA = [{id:'Alice Freeman', user_photo: 'https://i.pravatar.cc/100?img=26'},
    {id:'Barrera', user_photo: 'https://i.pravatar.cc/100?img=21'},
    {id:'BossMen', user_photo: 'https://i.pravatar.cc/100?img=52'},
    { id:'Josefina', user_photo: 'https://i.pravatar.cc/100?img=49'},
    {id: 'Velazques', user_photo: 'https://i.pravatar.cc/100?img=69'},
    ];
    
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
                        sessionStorage.setItem('current_user', JSON.stringify(results[0]))
                    }
                }, err => {
                    setError(err.message)
                    setPending(false)
                    
                })
        const q = query(collection(db, 'chat-app2'));
        let changes = [];
        const unsub = onSnapshot(q, orderBy('timestamp', 'asc'),  { includeMetadataChanges: true }, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
               if (change.type === "added") {
                  changes.push(change.doc.data());
               }
            })
            console.log('changes', changes)
            const newMessages = changes.filter((obj =>{
                return obj.is_delayed&&data.indexOf(obj)<0;
            }));
            
            setData(newMessages)
        })
        return ()=> unsub();
    },[])
    
    // useEffect(() => {
    //     const dbref = collection(db,'chat-app');
    //     getDocs(dbref).then((snapshot) =>{
    //         if(snapshot.empty) {
    //             setError('Sorry no users found please login to chat')
    //             setPending(false)
    //         }else{
    //             let results = [];
    //             snapshot.docs.forEach(doc => {
    //                 console.log(doc)
    //                 results.push({...doc.data(), id: doc.id})
    //                 console.log(results)
    //             })
    //             setData(results)
    //             setPending(false)
    //             sessionStorage.setItem('current_user', JSON.stringify(results[0]))
    //         }
    //     }, err => {
    //         setError(err.message)
    //         setPending(false)
            
    //     })

        
    // },[])
    
    return (
        <Container>
            <UserHeader></UserHeader>
            <ChatsTitle></ChatsTitle>
            {error&&<ErrorLoading>{error}</ErrorLoading>}
            {pending&&<Loading>Loading...</Loading>}
            {AAA&&<UserList data={AAA}/>}
            
            
        </Container>
    )
}
