import React from 'react';
import styled from 'styled-components';
import UserHeader from './UserHeader';
import UserList from './UserList';
import ChatsTitle from './ChatsTitle';
import { db } from '../../services/firebase';
import { useState, useEffect } from 'react';

import { useMessages } from '../../hooks/useMessages';
import { set_marked } from '../../redux/marked';
import { useDispatch, useSelector } from 'react-redux';



const Container = styled.div`
    width: 35%;
    height: 100%;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    `;


export default function Users({init}) {
        
    const [list, setList] = useState();
    const source = 'chat-app2';
    const alert = useMessages(source);
   
    
      
    
    const incoming = alert.filter((obj)=>{return obj.is_delayed});
    
    
    
    const move = (arr, mess, on = 1) => {
        const lastId = mess.at(-1)?.user;
        console.log('lastId', lastId);
               
        
        const idx = arr.findIndex(obj => { return obj.id === lastId });
        console.log('idx', idx)
        return arr.splice(0, 0, ...arr.splice(idx, on)), arr;
          
    }
    const finalList = move(init, incoming)
    

     
    
    
    
    const handleChange = (e) =>{
            setList(e.target.value)
        
    }

    const filtredList = finalList.filter(obj => {
        if (list === undefined) {
            return obj
        } else {
            return obj.id.toLowerCase().includes(list.toLowerCase())
                
            
        }
    })
    
    return (
        <Container>
            <UserHeader handleChange={handleChange} value={list }></UserHeader>
            <ChatsTitle></ChatsTitle>
            
            {init && <UserList data={filtredList} messages={incoming} all={ alert} />}
            
            
        </Container>
    )
}
