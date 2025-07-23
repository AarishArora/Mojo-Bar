// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXeeGLxVbySekJiguEFw6jq1EH3pd_1Ic",
  authDomain: "mojo-bar.firebaseapp.com",
  projectId: "mojo-bar",
  appId: "1:854638267540:web:c07e603a245b54a01c3881",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
