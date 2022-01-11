
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { addInfo } from '../helpers/functions'


const initialValues ={ title:"" ,url:"" ,content:""}
const NewBlog = () => {
    const [info, setinfo] = useState(initialValues)
    const navigate =useNavigate
    const handleSubmit=()=>{
        console.log(info)
        addInfo(info)
        navigate("/")
    }

    const handleChange =(e)=>{
        // const name =e.target.name
        // const value =e.target.value
        const {name,value}=e.target;
        setinfo({...info,[name]:value})
        
    }
    return (
        <div>
            <input 
            type="text"
             name="title" 
             value ={info.title}
             onChange ={handleChange} />
            <input 
            type="text" 
            name ="url" 
            value={info.url}
            onChange ={handleChange} 
             />
            <textarea 
            name="content" 
            id=""
            value={info.content} 
            onChange ={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default NewBlog
