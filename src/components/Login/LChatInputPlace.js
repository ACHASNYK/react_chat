import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Send } from '../../components/Icons/send.svg';


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
    width: 80%;
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
        width: 90%;
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
export default function LChatInputPlace() {

    
    return (
              
        <MainContainer>
            <InputContainer >
                <InputForm placeholder='Type your message'
                    
                ></InputForm>
                <SendButton type='submit'
                    disabled
                ><Send /></SendButton>
            </InputContainer>
        </MainContainer>
  )
}
