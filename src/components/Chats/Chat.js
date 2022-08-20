import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatInputPlace from './ChatInputPlace'
import styled from 'styled-components'

export default function Chat() {
    const messages = [{ name: 'AA' }, { name: 'two' }, { name: 'three' }];

    const Chat = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gainsboro;
    width: 65%;
    height: 100%;
    `
    return (
        <Chat>
            <ChatHeader></ChatHeader>
            <ChatBody messages={ messages }></ChatBody>
            <ChatInputPlace></ChatInputPlace>
        </Chat>
    )
}
