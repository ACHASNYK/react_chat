import React from 'react'
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';

const Container = styled.div`
    width: 30%;
    height: 40%;
    margin: auto;
    background-color: gainsboro;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const Text = styled.div`
    font-size: 2em;
    font-weight: 700;
    color: #383838;
`
const Button = styled.div`
border: 1px solid black;
background-color: white;
color: #383838;
font-size: 2em;
font-weight: 700;
text-align: center;
`

export default function Login() {

    const { login } = useAuth();
  return (
      <>
          <Container>
              <Text>Please login into application</Text>
              <Button onClick={login} >Login</Button>
          </Container>
      </>
  )
}
