import React from 'react'
import "./Form.css"
import NavBar from './NavBar'
// import { Link } from "react-router-dom";
import {Navigate, useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import FileBase64 from 'react-file-base64';

function Form() {
  const navigate = useNavigate();
  const [image,setImage]=useState({image:""})
  const [name,setName]=useState("")
  const [location,setLocation]=useState("")
  const [description,setDescription]=useState("")
  const [url,setUrl] = useState("")

  useEffect(()=>{
   
     fetch("/createpost",{
         method:"post",
         headers:{
             "Content-Type":"application/json",
         },
         body:JSON.stringify({
             name,
             location,
             description,
             pic:url
         })
     }).then(res=>res.json())
     .then(data=>{
         console.log(data)
         navigate("/posts")
     }).catch(err=>{
          console.log("hi")
         console.log(err)
     })
    
 },[url])
  
  return (
    <>
    <NavBar />
    <div className='container'>
           <form action="https://instaclone-10x.onrender.com/createpost" method='post'>
           {/* <input type="file" name="image"  onChange={(e)=>setImage(e.target.files[0])}  /> */}
           <FileBase64
          type="file"
          multiple={false}
          name="image"
          onDone={({ base64 }) => setImage({image: base64 })}
        />


         <div className='middle'> 
         <input type="text"  placeholder='name' name="name" value={name} autoComplete="off"
             onChange={(e) => setName(e.target.value)}  required/>

        <input type="text"  placeholder='location'  name="location" value={location}
           onChange={(e) => setLocation(e.target.value)}  required  />
         </div>

        <input type="text"  placeholder='description' name="description" value={description}
           onChange={(e) => setDescription(e.target.value) }  required
        /> <br />
        
        <button  >Post </button>
        </form>
  
    </div>
    </>
  )
}

export default Form;