// tools/firebase/entry.js
export { initializeApp } from 'firebase/app';
export {
    getAuth, signInAnonymously, onAuthStateChanged,
} from 'firebase/auth';
export {
    getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, where, query, orderBy, limit,
} from 'firebase/firestore';