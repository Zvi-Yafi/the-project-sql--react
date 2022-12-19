import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Comments = () => {
  const url = window.location.href.split("/")[5];

  const [data, setData] = useState(null);
  async function getComemens() {
    const res = await fetch(
      `http://localhost:5003/posts/${url}/comments`
    );
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    getComemens();
  }, []);
  return (
    <div>
      {!data ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data.map((item, idx) => (
          <Card
            key={idx}
            style={{
              width: "20rem",
              height: "30rem",
              display: "inline-block",
              margin: "5px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/cloud-sky-twilight-times_74190-4017.jpg?w=2000"
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Comments;
