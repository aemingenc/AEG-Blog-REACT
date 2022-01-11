import React from 'react'
import Card from "../components/Card"
 import { useFetch } from '../helpers/functions'
const Main = () => {

     const {contactList} = useFetch();

    return (
        <div>
            
           {contactList?.length ===0 ? (
           <p>Proje yok</p>) :( 
               //console.log(contactList)
            contactList?.map((item,index)=>(
                <div key ={index}>
               <Card title={item.title} url={item.url} content={item.content} />
                </div>
           )) 
           )}
        </div>
    )
}

export default Main
