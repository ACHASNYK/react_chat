import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot, orderBy, serverTimestamp, } from "firebase/firestore";

export const useCollection = (user_id) => {
const [documents, setDocuments] = useState(null);

useEffect(()=>{
let ref = collection(db, 'chat-app', 'Josefina', 'messages');
const unsub = onSnapshot(ref, (snapshot) =>{
    const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    setDocuments(messages)
})
return () => unsub()
},[user_id])

return {documents}
}