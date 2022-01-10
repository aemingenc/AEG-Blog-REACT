import React from 'react'
import Card from "../components/Card"
// import { useFetch } from '../helpers/functions'
const Main = () => {

    //  const {contactList} = useFetch();

    return (
        <div>
            <Card/>
           {/* {contactList?.length ===0 ? (
           <p>Proje yok</p>) :( contactList.map((item,index)=>(
               <Card title={item.title} url={item.url} content={item.content} key={index}/>
           )) )} */}
        </div>
    )
}

export default Main
