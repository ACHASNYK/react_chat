import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { set_userId } from '../../redux/userid';
import { ReactComponent as Circle } from '../Icons/check_circle.svg';
import { useState, useEffect } from 'react';

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
    width: 4vh;
    border-radius: 5vh;
    margin-left: 6vh;
    margin-top: -.5vh;
    display: ${props => props.boolean? 'flex' :  'none'};
    align-items: center;
    justify-content: center;
    font-weight: 400;
    z-index: 2;

`

export default function UserItem({ data, messages }) {
    const [marked, setMarked] = useState(null)
    const [boolean, setBoolean] = useState(false)
    const [inc, setInc] = useState(null)
    const { id, user_photo } = data;
    const dispatch = useDispatch();
    const setsessionId = (user) => { sessionStorage.setItem('current_user', JSON.stringify(user)) }
    const myMessages = messages?.filter(obj => { return obj.user === id });
    const lastMessage = myMessages?.at(-1);
    const value = lastMessage?.value.slice(0, 45);
   ;
    const delayed = myMessages?.filter(obj => { return obj.is_delayed === true })
    
    const handleMarked = () => {
        if ((boolean && delayed.length > marked)||(!boolean&&delayed.length>marked)) {
            setMarked(delayed.length);
            setBoolean(true);
        }
    }
    const handleRendering = () => {
        if (messages.length > messages) {
            setInc(messages.length)
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
    console.log('my', myMessages)
    console.log('delayed', delayed, 'marked', marked)
    useEffect(() => { const handleMarked = () => {
        if ((boolean && delayed.length > marked)||(!boolean&&delayed.length>marked)) {
            setMarked(delayed.length);
            setBoolean(true);
        }
    };
        handleMarked()
        handleRendering()
    }, [handleMarked, handleBoolean, handleRendering])
  return (
      <Item onClick={() => { dispatch(set_userId(data)); setsessionId(data); handleBoolean() }} >
          <UserAvatar>
              <Alert boolean={ boolean}>NEW</Alert>
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
  )
}
