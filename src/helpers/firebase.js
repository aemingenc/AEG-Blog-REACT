import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBV6H7jw_AjcHCXQtIPu7FCSQcUsr9RttQ",
  authDomain: "react-blog-app-4c3f0.firebaseapp.com",
  databaseURL: "https://react-blog-app-4c3f0-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-4c3f0",
  storageBucket: "react-blog-app-4c3f0.appspot.com",
  messagingSenderId: "920598982578",
  appId: "1:920598982578:web:80ec3abdca6b5c320dfeab"
};
//Firebase başlatmak için initializeAPP KULLANDIK VE FİREBASEDEN İMPORT ETTİK
  const firebase = initializeApp(firebaseConfig);

  export default firebase;
  export const auth =getAuth(firebase);