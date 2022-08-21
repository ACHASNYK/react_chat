import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

function getMessages(userID, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-app', userID, 'messages'),
            orderBy('timestamp', 'asc')
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
        const full = await signInWithPopup(auth, provider);
        console.log(full)
        return { uid: user.uid, displayName: user.displayName, photo: user.photoURL };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };