import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const par = useParams()

console.log(par);
  return (
    <h1>user{}</h1>
  )
}

export default User