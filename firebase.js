import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAAAyOGzBt-UDL-KvQc7wAfSCSSpeau2lw",
  authDomain: "kinggames-1a6f8.firebaseapp.com",
  projectId: "kinggames-1a6f8",
  storageBucket: "kinggames-1a6f8.appspot.com",
  messagingSenderId: "967002777446",
  appId: "1:967002777446:web:601cbdbd45909bd862caa7",
  measurementId: "G-S6YJZD3YPX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}