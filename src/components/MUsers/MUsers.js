import React from 'react';
import styled from 'styled-components';
import MUserHeader from './MUserHeader';
import MUserList from './MUserList';
import ChatsTitle from '../Users/ChatsTitle';

import { useState,  } from 'react';
import { useMessages } from '../../hooks/useMessages';





const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    `;



export default function MUsers({init}) {

        
    const [list, setList] = useState();
    const source = 'chat-app2';
    const alert = useMessages(source);
    
    
      
    
    const incoming = alert.filter((obj)=>{return obj.is_delayed});
    

    
    
    const move = (arr, mess, on = 1) => {
        const lastId = mess.at(-1)?.user;
        
               
        
        const idx = arr?.findIndex(obj => { return obj.id === lastId });
        console.log('idx', idx)
        return arr?.splice(0, 0, ...arr.splice(idx, on)), arr;
          
    }
    const finalList = move(init, incoming)
    

     
    
    
    
    const handleChange = (e) =>{
            setList(e.target.value)
        
    }

    const filtredList = finalList?.filter(obj => {
        if (list === undefined) {
            return obj
        } else {
            return obj.id.toLowerCase().includes(list.toLowerCase())
                
            
        }
    })
    
    return (
        <Container>
            <MUserHeader handleChange={handleChange} value={list }></MUserHeader>
            <ChatsTitle></ChatsTitle>
            
            {init && <MUserList data={filtredList} messages={incoming} all={ alert} />}
            
            
        </Container>
    )
}
