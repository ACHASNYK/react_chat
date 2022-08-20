import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    width: 100%;
    height: 14vh;
    border-bottom: 1px solid gainsboro;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
`;

const UserAvatar = styled.div`
    box-sizing: border-box;
    border-radius: 50%;
    height: 8vh;
    width: 8vh;
    border: 1px solid gainsboro;
    margin-left: 1em;
`;
const UserPhoto = styled.img`
    object-fit: contain;
`;

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    
    height: 10vh;

`;
const UserTitle = styled.div`
    width: 100%;
    font-size: 1.8em;
    font-weight: 400;
    text-align: left;
    color: #383838;
`;
const RecentMessage = styled.div`
    width: 100%;
    font-size: 1em;
    font-weight: 200;
    color: dimgrey;
    text-align: left;
    
`;

const Date = styled.div`
    width: 20%;
    font-size: 1.2em;
    font-weight: 400;
    color: #383838;
    text-align: right;
    padding-bottom: 1em;
    
`;

export default function UserItem() {
  return (
      <Item>
          <UserAvatar>
              <UserPhoto/>
          </UserAvatar>
          <UserData>
              <UserTitle>Josefina</UserTitle>
              <RecentMessage>lets meet today</RecentMessage>
          </UserData>
          <Date>Aug 20, 2022</Date>
    </Item>
  )
}
