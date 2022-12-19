import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import { Outlet} from "react-router-dom";

const Deshbord = () => {
 
  return (
   <div style={{textAlign:'center'}}>
 <Navbar bg="primary" variant="dark" >
          <Nav className="me-auto" >
            <Nav.Link style={{margin:'15px'}}  href="/home/info">Info</Nav.Link>
            <Nav.Link style={{margin:'15px'}} href="/home/Todos">Todos</Nav.Link>
            <Nav.Link style={{margin:'15px'}} href="/home/Posts">Posts</Nav.Link>
             <Nav.Link style={{margin:'15px'}}  href="/home/Alboms">Alboms</Nav.Link>
              <Nav.Link onClick={()=>{
               const remove = () => {
                localStorage.removeItem("user");
              };
              remove()
            }} style={{margin:'15px'}}  href="/home/login">Logout</Nav.Link>
          </Nav>
      </Navbar>
      <Outlet />
   </div>
  );
};

export default Deshbord;

