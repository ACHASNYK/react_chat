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

export default function UserList({data}) {

  

  return (
    <List>
      {data.map((e, i) => {console.log(e.id, e.user_photo)
        return (<UserItem key={i} data={e}  />)
      })}
      
      
    </List>
  )
}
