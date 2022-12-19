import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { getAlbom } from "./GetUsers";
import ListGroup from "react-bootstrap/ListGroup";

const Albums = () => {
  const navigate = useNavigate();
  const [alboms, setAlboms] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")).userID;
    getAlbom(user).then((t) => setAlboms(t));
  }, []);

  const sort = () => {
    const arr = [...alboms];
    arr.sort((x, y) => {
      if (x.title > y.title) {
        return 1;
      } else if (x.title < y.title) {
        return -1;
      }
      return 0;
    });
    return arr;
  };

  return (
    <div>
      {!alboms ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ListGroup>
          {sort().map((item, idx) => (
            <NavLink to={`${item.id}`}  key={idx}>
              <ListGroup.Item key={idx}>{item.title}</ListGroup.Item>
            </NavLink>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Albums;
