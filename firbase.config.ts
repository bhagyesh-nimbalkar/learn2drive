import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4ndn38-jaUwv-O2VxUamYcfpv_0imL3w",
  authDomain: "learn2drive-1e221.firebaseapp.com",
  projectId: "learn2drive-1e221",
  storageBucket: "learn2drive-1e221.appspot.com",
  messagingSenderId: "1002222514035",
  appId: "1:1002222514035:web:e6eaf08f997c6eb6539f06",
  measurementId: "G-ZK8EDP75VD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);