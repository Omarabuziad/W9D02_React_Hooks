
import React, { useState , useEffect } from "react";
import axios from "axios";

// jsx








const App = () => {
  const [posts, setPosts] = useState([{userId:1,id:101,title:"game", body:"nice game"} 
  , {userId:2,id:102,title:"movie", body:"nice movie"}])

  const render = posts.map( (elem,i)=>{
    return <h2>title : {elem.title} body : {elem.body}</h2>
  })


  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
    });
    // every time the status state changes the function will run
  }, []);

  const [userId, setUserId] = useState(0)
  const [id, setId] = useState(0)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const onChangeUserId = (e)=>{
    if(e.target.value>=1 || e.target.value<=10){
      setUserId(e.target.value)
    }
  }

  const onChangeId = (e)=>{
    if(e.target.value>=100){
      setId(e.target.value)
    }
  }

  const onChangeTitle = (e)=>{
    setTitle(e.target.value)

  }

  const onChangeBody = (e)=>{
    
    setBody(e.target.value)
    
  }

  const addPosts = ()=>{
    setPosts([...posts, {userId,id,title,body}])

  }


  return <div>
  <h1>Blog App</h1>;
  <button onClick={addPosts}>Add</button>
  <input type="Number"  onChange={onChangeUserId}   placeholder="userId" ></input>
  <input onChange={onChangeId} placeholder="id" ></input>
  <input onChange={onChangeTitle} placeholder="title"></input>
  <input onChange={onChangeBody} placeholder="body"></input>
  {render}
  </div>

};

export default App