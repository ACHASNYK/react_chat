import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';

const List = styled.ul`
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
    width: 100%;
`

export default function UserList() {


  return (
    <List>
      <UserItem />
      <UserItem />
      <UserItem/>
    </List>
  )
}
