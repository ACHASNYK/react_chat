import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Send } from '../../components/Icons/send.svg';
import { postMessage } from '../../services/firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainContainer = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        border-top: 1px solid gainsboro;
        height: 18vh;
    `;
    const InputContainer = styled.div`
    box-sizing: border-box;
    height: 7vh;
    width: 60%;
    background-color: white;
    border-radius: 5vh;
    border: 1px solid gainsboro;
    box-shadow: 1px 1px lightgray inset;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    `;

    const InputForm = styled.input.attrs(props => ({
        type: 'text'
    }))`
        border: none;
        outline: none;
        width: 70%;
        min-height: 1rem;
        box-sizing: border-box;
        margin-left: 2vh;
        color: #383838;
        text-align: left;
        font-size: 1em;
    ::placeholder {
            color: grey;
        }
    
    `;

    const SendButton = styled.button`
    box-sizing: border-box;
    
    `
export default function ChatInputPlace() {
    const {id} = useSelector((state) => state.userId.value);
    const [value, setValue] = useState('');
    
    const handleInput = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    };
    const handlePost = (e) => {
        // e.preventDefault();
        postMessage(id, value);
        console.log(id, value);
        setValue('');
    }

    const norrisRequest = async e => {
        fetch('https://api.chucknorris.io/jokes/random')
    }
            
    return (
              
        <MainContainer>
            <InputContainer onSubmit={handlePost} >
                <InputForm placeholder='Type your message'
                    value={value}
                    onChange={handleInput}
                    required
                    minLength={1}
                ></InputForm>
                <SendButton type='submit' onClick={handlePost}
                    disabled={value < 1 }
                ><Send /></SendButton>
            </InputContainer>
        </MainContainer>
  )
}
