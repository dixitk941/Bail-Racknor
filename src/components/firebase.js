import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCPi8Kwdvs4XB0jyQ7AZTSjAlLrYBnQvMI",
    authDomain: "bail-reckoner-21549.firebaseapp.com",
    projectId: "bail-reckoner-21549",
    storageBucket: "bail-reckoner-21549.appspot.com",
    messagingSenderId: "372088590601",
    appId: "1:372088590601:web:c5b3198dd00135a65bc3d8",
    measurementId: "G-JW4YZHW29R"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();


export { db, auth, storage };
