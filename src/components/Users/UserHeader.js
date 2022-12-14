import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchLogo } from '../Icons/search.svg';
import { ReactComponent as Circle } from '../Icons/check_circle.svg';


const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-bottom: 1px solid gainsboro;
    `;
const UserContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `;
    const UserAvatar = styled.div`
        height: 7vh;
        width: 7vh;
        border: 1px solid gainsboro;
        border-radius: 50%;
        margin-top: 3vh;
        margin-left: 3vh;
        margin-bottom: 4vh;
        position: relative;
        
    `;
    const UserPhoto = styled.img`
        object-fit: contain;
        border-radius: 50%;
        height: 7vh;
        width: 7vh;
    `;

    const UserTitle = styled.div`
        font-size: 2em;
        font-weight: 500;
        color: #383838;
        text-align: center;
        margin-left: 3vh;
        margin-bottom: 1vh;
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
        width: 30vh;
        color: #383838;
        font-size: 1.2em;
        font-weight: 300;
        border: none;
        outline: none;
        ::placeholder {
            color: grey;
            font-size: 0.9em;
        }
    `;
    const Check = styled.div`
        position: absolute;
        margin-top: -2vh;
        margin-left: 5vh;

    `;
    
        
   

export default function UserHeader({handleChange, value}) {

    const { displayName, photo, } = JSON.parse(sessionStorage.getItem('login'));
    
    

    

    
    
    
  return (
      <Header>
          
          <UserContainer>
              <UserAvatar>
                  <UserPhoto alt='image' src={photo} />
              <Check>
                  <Circle/>
              </Check>
            </UserAvatar>
              <UserTitle>Welcome, {displayName}</UserTitle>
          </UserContainer>    
          <UserSearch>
              <SearchLogo></SearchLogo>
              <SearchField 
              onChange={handleChange}
              value={value}
              placeholder='Search or start new chat'
              required
              >
              </SearchField>
          </UserSearch>
      </Header>
      
  )
}
