
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { addInfo } from '../helpers/functions'


const initialValues ={ title:"" ,url:"" ,content:""}
const NewBlog = () => {
    const [newInfo, setNewInfo] = useState(initialValues)
    const navigate =useNavigate
    const handleSubmit=()=>{
        console.log(newInfo)
        addInfo(newInfo)
        navigate("/")
    }

    const handleChange =(e)=>{
        // const name =e.target.name
        // const value =e.target.value
        const {name,value}=e.target;
        setNewInfo({...newInfo,[name]:value})
        
    }
    return (
        <div>
            <input 
            type="text"
             name="title" 
             value ={newInfo.title}
             onChange ={handleChange} />
            <input 
            type="text" 
            name ="url" 
            value={newInfo.url}
            onChange ={handleChange} 
             />
            <textarea 
            name="content" 
            id=""
            value={newInfo.content} 
            onChange ={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default NewBlog
