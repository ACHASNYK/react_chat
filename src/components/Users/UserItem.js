import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { set_userId } from '../../redux/userid';
import {ReactComponent as Circle } from '../Icons/check_circle.svg'

const Item = styled.div`
    width: 100%;
    height: 16vh;
    border-bottom: 1px solid gainsboro;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    cursor: pointer;
`;

const UserAvatar = styled.div`
    box-sizing: border-box;
    border-radius: 50%;
    height: 8vh;
    width: 8vh;
    border: 1px solid gainsboro;
    margin-left: 1em;
    position: relative;
`;
const UserPhoto = styled.img`
    object-fit: contain;
    position: relative;
    /* margin-top: 0; */
    border-radius: 50%;
    /* margin-left: 0vh; */
    /* padding-top: 1px; */
    /* padding-right: 1px; */
    height: 8vh;
    width: 8vh;
    
`;

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    /* margin-top: 1vh; */
    margin-left: 2vh;
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
    font-size: 1em;
    font-weight: 300;
    color: #383838;
    text-align: right;
    padding-bottom: 1em;
    
`;
const Check = styled.div`
    position: absolute;
    margin-top: -2.5vh;
    margin-left: 6vh;

`;
const Alert = styled.div`
    position: absolute;
    border: 1px solid #383838;
    background-color: #383838;
    color: white;
    height: 2.2vh;
    width: 2.2vh;
    border-radius: 50%;
    margin-left: 6vh;
    margin-top: -.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    z-index: 2;

`

export default function UserItem({data}) {
    const {id, user_photo } = data;
    const dispatch = useDispatch();
  return (
      <Item onClick={()=> dispatch(set_userId(data))} >
          <UserAvatar>
              <Alert>3</Alert>
              <UserPhoto alt='image' src={user_photo}  />
              <Check>
                  <Circle/>
              </Check>
          </UserAvatar>
          <UserData>
              <UserTitle>{id}</UserTitle>
              <RecentMessage>lets meet today</RecentMessage>
          </UserData>
          <Date>Aug 20, 2022</Date>
    </Item>
  )
}
