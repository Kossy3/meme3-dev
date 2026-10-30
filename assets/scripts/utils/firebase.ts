import { initializeApp } from '../../libs/firebase-bundle.mjs';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from '../../libs/firebase-bundle.mjs';
import { getFirestore, doc, setDoc } from '../../libs/firebase-bundle.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyBA9n5n09NmIo9cW92igQ_EZUwhlfMzqjM",
  authDomain: "meme-stampede.firebaseapp.com",
  projectId: "meme-stampede",
  storageBucket: "meme-stampede.firebasestorage.app",
  messagingSenderId: "181313749557",
  appId: "1:181313749557:web:8dec2498fcba0ea2b2e77c",
  measurementId: "G-75LQHR1R6Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/** ログイン済みユーザーを返す。未ログインなら匿名ログインする */
export function ensureSignedIn(): Promise<User> {
    return new Promise((resolve, reject) => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            unsub();
            if (user) { resolve(user); return; }
            try {
                const cred = await signInAnonymously(auth);
                resolve(cred.user);
            } catch (e) {
                reject(e);
            }
        });
    });
}

/** ランキング用データの保存（ルールに合わせた4フィールド） */
export async function saveScore(data: {
    steps: number; day: number; name: string; assention: boolean;
}) {
    const user = await ensureSignedIn();
    await setDoc(doc(db, 'meme3', user.uid), data);
}