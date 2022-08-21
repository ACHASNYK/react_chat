import React from 'react';
import { getMessages } from '../services/firebase';

function useMessages(userID) {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getMessages(userID, setMessages);
        return unsubscribe;
    }, [userID]);

    return messages;
}

export { useMessages };