import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchLogo } from '../Icons/search.svg';
import { ReactComponent as Circle } from '../Icons/check_circle.svg'

export default function UserHeader() {

    const UserHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-bottom: 1px solid gainsboro;
    `;
    const UserAvatar = styled.div`
        height: 6vh;
        width: 6vh;
        border: 1px solid gainsboro;
        border-radius: 50%;
        margin-top: 3vh;
        margin-left: 3vh;
        margin-bottom: 4vh;
        position: relative;
        
    `;
    const UserPhoto = styled.img`
        object-fit: contain;
    `;
    const UserSearch = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        background-color: white;
        align-items: center;
        width: 85%;
        height: 5vh;
        border-radius: 5vh;
        margin-left: 3vh;
        margin-bottom: 3vh;
        padding-left: 1vh;
        border: 1px solid gainsboro;
        gap: 3%;

    `;

    const SearchField = styled.input.attrs(props => ({
        type: 'text',
        
    }))`        
        color: dimgray;
        border: none;
        outline: none;
        ::placeholder {
            color: grey;
        }
    `;
    const Check = styled.div`
        position: fixed;
        margin-top: 0vh;
        margin-left: 4vh;

    `;
    
  return (
      <UserHeader>
          <UserAvatar>
              <UserPhoto alt="image" />
              <Check>
                  <Circle/>
              </Check>
        </UserAvatar>
          <UserSearch>
              <SearchLogo></SearchLogo>
              <SearchField placeholder='Search or start new chat'></SearchField>
          </UserSearch>
      </UserHeader>
      
  )
}
