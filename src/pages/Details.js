import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useFetch } from '../helpers/functions'
const Details = () => {
     const {contactList} = useFetch()
     const detailId=(id)=>{
        const result =contactList?.filter((item)=>item.id ===id);
        return result;
    }
    const updateHandle =(id =>{
        Navigate(`/upDate/${id}`)
    })
    return (
        <div>
      
          

        </div>
    )
}

export default Details
