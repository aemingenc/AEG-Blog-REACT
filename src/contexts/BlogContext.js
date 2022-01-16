import { createContext,useEffect,useState } from "react";
import {getDatabase,ref, onValue,query} from "firebase/database"
import React from "react";


export  const BlogContext = createContext()

const BlogContextProvider = (props) => {

    const [currentInfo,setCurrentInfo] =useState()
    
    
     


    useEffect(()=>{
        const db=getDatabase();
        const userRef = ref(db,"contact");

        onValue(query(userRef),snapshot =>{
            const currentUserInfo = snapshot.val()
            console.log(currentUserInfo)
            const currentUserArray = [];
            for (let id in currentUserInfo){
                currentUserArray.push({id,...currentUserInfo[id]});
            }
            setCurrentInfo(currentUserArray);
            console.log(currentUserArray)
        });
    },[]);



    return(
        <BlogContext.Provider value ={{currentInfo}}>
            {props.children}
        </BlogContext.Provider>
    )
    }
export default BlogContextProvider;