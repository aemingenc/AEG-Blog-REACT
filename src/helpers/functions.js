import firebase from "./firebase"
import {getDatabase,ref,push,set, onValue,query,remove,child,update} from "firebase/database"
import { useEffect, useState } from "react";


export const addInfo = (info)=>{
    const db =getDatabase();
    const userRef = ref (db,"contact")
    const newUserRef = push(userRef)
    set(newUserRef,{
        title: info.title,
        url:info.url,
        content:info.content

    })
    console.log("veri eklendi")
}

// export const useFetch = ()=>{
//     const [contactList,setContactList]= useState();
//     useEffect(()=>{
//         const db=getDatabase();
//         const userRef = ref(db,"contact");

//         onValue(query(userRef),snapshot =>{
//             const contacts = snapshot.val()
//             const contactArray = [];
//             for (let id in contacts){
//                 contactArray.push({id,...contacts[id]});
//             }
//             setContactList(contactArray);
//         })
//     },[]);
// }