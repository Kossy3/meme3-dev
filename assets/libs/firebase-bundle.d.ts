// assets/libs/firebase-bundle-types.d.ts
// ※ ファイル先頭に import / export を書かないこと（書くとアンビエント宣言にならない）

declare module '*/firebase-bundle.mjs' {
    export { initializeApp } from 'firebase/app';
    export {
        getAuth, signInAnonymously, onAuthStateChanged, User
    } from 'firebase/auth';
    export {
        getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy, limit, where, 
    } from 'firebase/firestore';
}