import React from 'react';
import styled from 'styled-components';
import UserHeader from './UserHeader';
import UserList from './UserList';
import ChatsTitle from './ChatsTitle';



export default function Users() {

    const Users = styled.div`
    width: 35%;
    height: 100%;
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    `
    return (
        <Users>
            <UserHeader></UserHeader>
            <ChatsTitle></ChatsTitle>
            <UserList/>
            
        </Users>
    )
}
