import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Send } from '../../components/Icons/send.svg';
import { postMessage } from '../../services/firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAnswer } from '../../services/getAnswer'

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
    height: 3.5em;
    width: 3.5em;
    margin-right: 1vh;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.25));
        
    };

&:active {
    transform: scale(0.96);
    filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
};
`
    
    
export default function MChatInputPlace() {

    const [value, setValue] = useState('');
    const init = JSON.parse(sessionStorage.getItem('current_users'));
    const data = useSelector((state) => state.userId.value)|| init[0];
    const id = data?.id;
    
    
    
    const handleInput = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    };
    const handlePost = (e) => {
        // e.preventDefault();
        postMessage(id, value);
        console.log(id, value);
        getAnswer(id)
        setValue('');
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
                <SendButton onClick={()=> handlePost()}
                    disabled={value < 1 }
                ><Send /></SendButton>
            </InputContainer>
        </MainContainer>
  )
}
