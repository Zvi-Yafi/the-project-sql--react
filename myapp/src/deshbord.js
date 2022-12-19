import { Outlet, useNavigate } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <h1
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "lightblue",
          fontSize: "30px",
          textAlign: "center",
          lineHeight: "3.0",
          fontFamily: "-moz-initial",
          marginBottom: "0",
          color: "lightslategray",
        }}
      >
        <Button
          style={{ float: "left", marginTop: "25px" }}
          onClick={() => {
            navigate("/home/login");
          }}
          variant="success"
        >
          Login
        </Button>

        {user && (
          <Stack
            direction="row"
            spacing={2}
            style={{ float: "right", marginTop: "25px" }}
          >
            <Avatar {...stringAvatar(user.name)} />
          </Stack>
        )}
        {user ? `welcome:${user.userName}` : "!אנא הרשם בבקשה"}
      </h1>
      <Outlet />
    </>
  );
}

export default Home;
