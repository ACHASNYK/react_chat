import React from 'react';
import styled from 'styled-components';

import UserItem from './UserItem';

const List = styled.ul`
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
    width: 100%;
    height: 80%;
    overflow-y: scroll;

`

export default function UserList({data, users}) {

  users?console.log(users):console.log('empty')

  return (
    <List>
      {data.map((e, i) => {
        return (<UserItem key={i} data={e}  />)
      })}
      
      
    </List>
  )
}
