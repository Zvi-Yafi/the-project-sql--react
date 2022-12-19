import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {  Outlet, useNavigate } from "react-router-dom";
import { getpost } from "./GetUsers";

function Posts() {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("user")).id;
    getpost(userid).then((u) => setPosts(u));
  }, []);
  return (
    <>
      {!posts ? (
       <div className="text-center">
       <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
      ) : (
        posts.map((item, idx) => (
          <Accordion key={idx}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                {item.body}
                <Button
                  variant="outline-info"
                  style={{float:'right'}}
                  onClick={() => {
                    navigate(`${item.id}`);
                  }}
                >
                 show post
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))
      )}
      <Outlet />
    </>
  );
}
export default Posts;
