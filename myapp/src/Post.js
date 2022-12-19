import React, { useEffect, useState } from "react";
import {  Outlet, useNavigate, useParams } from "react-router-dom";


const Post = () => {
  const [data, setData] = useState();
  const [hide, setHide] = useState(true);

  const url = window.location.href.split('/')[5]
  console.log(url);
  
  const navigate = useNavigate();

  async function getPost() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${url}`
    );
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    getPost();
  }, []);

  console.log(data);
  return (
    <div>
      <h1 style={{textAlign:'center'}}>post</h1>
      <h3 style={{textAlign:'center'}}>{data && data.title}</h3>
      <h5 style={{textAlign:'center'}}>{data && data.body}</h5>
      
      <button 
      style={{}}
        className="btn btn-secondary"
        onClick={() => {
          setHide(!hide);
          hide ? navigate("comments") : navigate(`/home/Posts/${data.id}`);
        }}
      >
        {hide ? "show commens" : "back"}
      </button>
      <Outlet />
    </div>
  );
};

export default Post;
