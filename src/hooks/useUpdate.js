import React, {useEffect} from 'react';
import {getUpdate} from '../services/firebase'


function useUpdate(source) {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const unsubscribe = getUpdate(source, setUsers);
        return unsubscribe;
    }, [source]);
    console.log(users)
    return users;
}

export { useUpdate };