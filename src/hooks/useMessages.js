import React, {useEffect} from 'react';
import { getMessages } from '../services/firebase';

function useMessages(userID) {
    const [messages, setMessages] = React.useState([]);
    
    useEffect(() => {
        const unsubscribe = getMessages(userID, setMessages);
        return unsubscribe;
    }, [userID]);
    // console.log(messages)
    return messages;
}

export { useMessages };