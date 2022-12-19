import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import getUser from "./GetUsers";
const Info = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const userName = localStorage.getItem("nameUser");
    const pass = localStorage.getItem("passUser");
    getUser(userName, pass).then((t) => setUser(t));
  }, []);

  return (
    <div style={{textAlign:'center' ,display:'flex',justifyContent:'center'}}>
      {!user ? 
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
       : <Card style={{ width: '18rem',width:'30%' }}>
       <Card.Img
        variant="top"
         src="https://findicons.com/files/icons/573/must_have/256/user.png"
         
         />
       <Card.Body>
         <Card.Title style={{ color:'lightcoral',fontSize:'35px' }}>name: {user.name}</Card.Title>
         <Card.Text style={{ color:'lightcoral',fontSize:'30px' }}>
        {user.email}
         </Card.Text>
       </Card.Body>
       <ListGroup className="list-group-flush" >
         <ListGroup.Item >userName: {user.userName}</ListGroup.Item>
         <ListGroup.Item>userID: {user.userID} </ListGroup.Item>
         <ListGroup.Item>address:  {user.address} </ListGroup.Item>
         
       </ListGroup>
    
     </Card>
   
      
      }
    </div>
  
  );
};
export default Info;

