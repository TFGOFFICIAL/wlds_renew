// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWs6ai2YI7VTVRW6GVs6quq-g1QT9RukA",
  authDomain: "wlds-4bc94.firebaseapp.com",
  projectId: "wlds-4bc94",
  storageBucket: "wlds-4bc94.appspot.com",
  messagingSenderId: "672188757589",
  appId: "1:672188757589:web:c3771f8959ea89d65346dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app