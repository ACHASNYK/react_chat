import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { set_userId } from '../../redux/userid';
import { ReactComponent as Circle } from '../Icons/check_circle.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateAnswer } from '../../services/firebase';

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
        &:hover {transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.15));
        &:active {
        transform: scale(0.96);
        filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
}
};
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
    
    border-radius: 50%;
    
    height: 8vh;
    width: 8vh;
    
`;

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 2vh;
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
    margin-right: 1vh;
    
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
    border-radius: 5vh;
    margin-left: 6vh;
    margin-top: -.5vh;
    display: ${props => props.boolean? 'flex' :  'none'};
    align-items: center;
    justify-content: center;
    font-weight: 400;
    z-index: 2;

`

export default function MUserItem({ data, messages }) {
    
    const [boolean, setBoolean] = useState(true)
    
    const { id, user_photo } = data;
    const dispatch = useDispatch();
    const setsessionId = (user) => { sessionStorage.setItem('current_user', JSON.stringify(user)) }
    const myMessages = messages?.filter(obj => { return obj.user === id });
    const lastMessage = myMessages?.at(-1);
    const value = lastMessage?.value.slice(0, 20);
   ;
    const delayed = myMessages?.filter(obj => { return obj.is_delayed === true })
    
    const handleUpdate = () => {
        delayed.forEach(obj => {
            updateAnswer(obj.id)
        })
    }
    const handleMarked = () => {
        if (delayed.length!==0 ) {
            setBoolean(true);
        } else if (delayed.length === 0) {
            setBoolean(false)
        }
    }
    
    const handleBoolean = () => {
        setBoolean(false)
    }
    const stamp = (data) => {
        const calc = new window.Date(data?.seconds * 1000)
        return calc.toLocaleString();
    }
     const timestamp = stamp(lastMessage?.timestamp)
    
    
    useEffect(() => {
        handleMarked();
    },
        
     [handleMarked, messages, boolean])
  return (
      <Link to="/chat" className='links'>
          <Item onClick={() => { dispatch(set_userId(data)); setsessionId(data); handleBoolean(); handleUpdate() }} >
          <UserAvatar>
                  <Alert boolean={boolean}>{ delayed.length}</Alert>
              <UserPhoto alt='image' src={user_photo}  />
              <Check>
                  <Circle/>
              </Check>
          </UserAvatar>
          <UserData>
              <UserTitle>{id}</UserTitle>
              <RecentMessage>{value}...</RecentMessage>
          </UserData>
          <Date>{ timestamp}</Date>
          </Item>
      </Link>
  )
}
