import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Photos = () => {
  const [img, setImg] = useState(0);
  const url = window.location.href.split('/')[5]
  console.log(url);

  const [photo, setPhoto] = useState(null);
  console.log(img);

  async function getPhoto() {
    const res = await fetch(
      `http://localhost:5003/albums/${url}/photos`
    );
    const data = await res.json();
    console.log(data);
    setPhoto(data);
  }

  useEffect(() => {
    getPhoto();
  }, []);

  const dafdef = (num) => {
    if (img + num * 1 >= 0 && img + num * 1 <= 50) {
      setImg(img + num * 5);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dafdef(-1)}
        >
          {"הקודם"}
        </button>
        <span> </span>

        <button className="btn btn-outline-secondary" onClick={() => dafdef(1)}>
          {"הבא"}
        </button>
      </div>
      {!photo ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        photo.slice(img).map((item, idx) =>
          idx <= 10 ? (
            <Card 
            key={idx}
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "5px",
                textAlign: "center",
              }}
            >
              <Card.Img src={item.thumbnailUrl} />
            </Card>
          ) : null
        )
      )}
    </div>
  );
};

export default Photos;
