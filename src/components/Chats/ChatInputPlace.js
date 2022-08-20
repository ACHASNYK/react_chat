import React, {Component } from 'react';
import styled from 'styled-components';
import {ReactComponent as Send } from '../../components/Icons/send.svg'

export default function ChatInputPlace() {
    
    const ChatInputPlace = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        border: 1px solid black;
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
    width: 70%;
    min-height: 1rem;
    box-sizing: border-box;
    border: 1px solid black;
    color: black;
    text-align: left;
    
    `;

    const SendButton = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    `
    
    return (
              
        <ChatInputPlace>
            <InputContainer>
                <InputForm></InputForm>
                <SendButton><Send/></SendButton>
            </InputContainer>
    </ChatInputPlace>
  )
}
