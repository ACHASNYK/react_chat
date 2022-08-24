import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

async function getUsers(){
    const dbref = collection(db, 'chat-app');
    let results = [];   
        getDocs(dbref).then((snapshot) =>{
                    
                        snapshot.docs.forEach(doc => {
                            
                            results.push({...doc.data(), id: doc.id, counter: 0})
                            console.log(results)
                        })

                       sessionStorage.setItem('current_users', JSON.stringify(results)) 
                       
                    })
                                 
    return results;            
}

async function getUpdate(source, callback) {
    let alert = [];
    return onSnapshot(
        query(
            collection(db, source)

        ),
        (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    alert.push(change.doc.data());
                }
            });
            console.log(alert);
            callback(alert);
        }
    );
}
function getMessages(userID, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-app2'),
            orderBy('timestamp', 'asc'),
            
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                
                id: doc.id,
                ...doc.data(),
            }));
            
            callback(messages);
        }
    );
}

async function postMessage(userID, text) {
    const colRef = collection(db, 'chat-app2')
    try {
        await addDoc(colRef, {
            user: userID,
            timestamp: serverTimestamp(),
            is_incoming: false,
            value: text.trim(),
        });
    } catch (error) {
        console.error(error);
    }
}

async function postAnswer(userID, text) {
    const colRef = collection(db, 'chat-app2')
    try {
        await addDoc(colRef, {
            user: userID,
            timestamp: serverTimestamp(),
            is_incoming: true,
            is_delayed: true,
            value: text.trim(),
        });
    } catch (error) {
        console.error(error);
    }
}
const firebaseConfig = {
  apiKey: "AIzaSyCXkfmnK4WuThdx-CQxOkwWOIaHVW6GgXQ",
  authDomain: "chat-app-achasnyk.firebaseapp.com",
  projectId: "chat-app-achasnyk",
  storageBucket: "chat-app-achasnyk.appspot.com",
  messagingSenderId: "694639988002",
  appId: "1:694639988002:web:817f03e0d6b2b66ab4e97b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);
       
        return { uid: user.uid, displayName: user.displayName, photo: user.photoURL };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle, postMessage, db, getMessages, getUpdate, postAnswer, getUsers };