import React, { useEffect, useState } from 'react';
import {addDoc, collection} from "firebase/firestore"
import { db,auth } from '../firebase-config';
import {useNavigate} from "react-router-dom"

function CreatePost({isAuth}) {
  const [titel,setTitel]=useState("");
  const [postText,setPostText]=useState("");
  const postCollection=collection(db,"post");
  const navigate = useNavigate();
  const createPost=async()=>{
    await addDoc(postCollection,{titel,
      postText,
      author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
    });
    navigate("/");
  };
  useEffect(()=>{
      if(!isAuth){
        navigate("/login");
      }
  });

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>create a post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title' onChange={(event)=>{setTitel(event.target.value);}}></input>
        </div>
        <div className='inputGp'>
          <label>post:</label>
          <textarea placeholder='post.....' onChange={(event)=>{setPostText(event.target.value);}}></textarea>
        </div>
        <button onClick={createPost}>submit post</button>
      </div>
    </div>
  );
  
}


export default CreatePost