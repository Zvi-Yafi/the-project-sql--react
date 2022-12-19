import React from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate()
  const remove = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>{}</div>
  )
}

export default Logout