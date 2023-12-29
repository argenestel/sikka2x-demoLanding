// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,
getAuth,
signInWithPopup,
 signInWithEmailAndPassword,
createUserWithEmailAndPassword,
 sendPasswordResetEmail,
 signOut,
 User,
 } from "firebase/auth";
import {
 getFirestore,
 query,
 getDocs,
  collection,
  where,
addDoc,
serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApps()[0];
// export const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

 export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export const logout = () => {
    signOut(auth);
  };


  export const getUsers = async () => {
    const usersCollection = collection(db, 'users'); // Replace 'users' with your Firestore collection name
    const usersSnapshot = await getDocs(usersCollection);
    return usersSnapshot.docs
    .map((doc) => ({
      id: doc.id,
      name: doc.data().name
    }));
  };

  interface Message {
    uid: string;
    displayName: string;
    text: string;
    timestamp: any; // Replace 'any' with the appropriate timestamp type from your Firebase setup
  }
  
  // Function to send a message to a chat room
  export async function sendMessage(roomId: string, user: any, text: string) {
    try {
      const messagesCollection = collection(db, 'chat-rooms', roomId, 'messages');
      await addDoc(messagesCollection, {
        uid: user.uid,
        displayName: user.displayName,
        text: text.trim(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  
  // Function to create a new chat room or get an existing one
  export async function setChatRoom(roomId: string) {
    try {
      const q = query(collection(db, 'chat-rooms'), where('roomId', '==', roomId));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'chat-rooms'), {
          roomId: roomId,
        });
      }
    } catch (error) {
      console.error('Error creating/getting chat room:', error);
    }
  }
  
  // Function to retrieve messages from a chat room
  export async function getMessages(roomId: string): Promise<Message[]> {
    const messagesCollection = collection(db, 'chat-rooms', roomId, 'messages');
    const q = query(messagesCollection);
  
    try {
      const querySnapshot = await getDocs(q);
      const messages: Message[] = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Message;
        messages.push(data);
      });
  
      return messages;
    } catch (error) {
      console.error('Error retrieving messages:', error);
      return [];
    }
  }